const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');

require('dotenv').config();

const ENVIRONMENT_ID = process.env.ENVIRONMENT_ID;
const ACCESS_KEY = process.env.ACCESS_KEY;

const getToken = (userId, role) => {
    return jwt.sign(
        {
            aud: ENVIRONMENT_ID,
            sub: userId,
            auth: {
                ckbox: {
                    role,
                    context: 'example-user-context'
                }
            }
        },
        ACCESS_KEY,
        {
            algorithm: 'HS256'
        }
    );
};

passport.use(
    new BasicStrategy((userId, password, done) => {
        if (userId === 'ckbox' && password === 'ckbox') {
            return done(null, { userId: 'ckbox' });
        }

        return done(null, false);
    })
);

const app = express();

app.use(passport.initialize());

app.use(
    passport.authenticate('basic', { session: false }),
    express.static('public')
);

app.get(
    '/token',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
        res.send(getToken(req.user.userId, 'user'));
    }
);

app.get(
    '/token/admin',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
        res.send(getToken(req.user.userId, 'admin'));
    }
);

app.listen(4137, () => console.log('Server running: http://localhost:4137'));

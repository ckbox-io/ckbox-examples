const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const { getToken } = require('./token');

// Specify required environment variables as per README
require('dotenv').config();

const USER_ID = 'ckbox';
const USER_PASSWORD = 'ckbox';

// Limits access to listed workspaces
const ALLOWED_WORKSPACES = process.env.ALLOWED_WORKSPACES
    ? process.env.ALLOWED_WORKSPACES.split(',')
    : undefined;

passport.use(
    new BasicStrategy((userId, password, done) => {
        if (userId === USER_ID && password === USER_PASSWORD) {
            return done(null, { userId: USER_ID });
        }

        return done(null, false);
    })
);

const app = express();

app.use(cors());

app.use(passport.initialize());

app.use(
    passport.authenticate('basic', { session: false }),
    express.static('public')
);

app.get('/token', (_, res) => {
    res.send(getToken('user', ALLOWED_WORKSPACES));
});

app.get('/token/admin', (_, res) => {
    res.send(getToken('admin', ALLOWED_WORKSPACES));
});

app.get('/token/superadmin', (_, res) => {
    res.send(getToken('superadmin'));
});

app.listen(4137, () => console.log('Server running: http://localhost:4137'));

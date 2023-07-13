const jwt = require('jsonwebtoken');

require('dotenv').config();

const ENVIRONMENT_ID = process.env.ENVIRONMENT_ID;
const ACCESS_KEY = process.env.ACCESS_KEY;

const getToken = (role, workspaces) => {
    return jwt.sign(
        {
            aud: ENVIRONMENT_ID,
            sub: 'ckbox',
            auth: {
                ckbox: {
                    role,
                    workspaces: role === 'superadmin' ? undefined : workspaces
                }
            }
        },
        ACCESS_KEY,
        {
            algorithm: 'HS256'
        }
    );
};

module.exports = { getToken };

const jwt = require('jsonwebtoken');
const axios = require('axios');

// Provide your environment ID
const ENVIRONMENT_ID = '<your_environment_id>';

// Provide your access key
const ACCESS_KEY = '<your_access_key>';

const getToken = (userId, role) => {
    return jwt.sign(
        {
            aud: ENVIRONMENT_ID,
            sub: userId,
            auth: {
                ckbox: {
                    role
                }
            }
        },
        ACCESS_KEY,
        {
            algorithm: 'HS256'
        }
    );
};

axios
    .get('https://api.ckbox.io/categories', {
        headers: {
            Authorization: getToken('dummy-admin-id', 'admin')
        }
    })
    .then((response) => console.dir(response.data, { depth: 5 }))
    .catch((error) => console.error(error.response.data));

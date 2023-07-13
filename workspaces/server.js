const cors = require('cors');
const express = require('express');
const { getToken } = require('./token');

require('dotenv').config();

const USER_ALLOWED_WORKSPACES = process.env.USER_ALLOWED_WORKSPACES.split(',');
const ADMIN_ALLOWED_WORKSPACES =
    process.env.ADMIN_ALLOWED_WORKSPACES.split(',');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/token', (_, res) => {
    res.send(getToken('user', USER_ALLOWED_WORKSPACES));
});

app.get('/token/admin', (_, res) => {
    res.send(getToken('admin', ADMIN_ALLOWED_WORKSPACES));
});

app.get('/token/superadmin', (_, res) => {
    res.send(getToken('superadmin'));
});

app.listen(4137, () => console.log('Server running: http://localhost:4137'));

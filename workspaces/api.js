const { getToken } = require('./token');

require('dotenv').config();

// Extracted from .env file.
const SERVICE_ORIGIN = process.env.SERVICE_ORIGIN;

const getAllWorkspaces = () => {
    return fetch(`${SERVICE_ORIGIN}/workspaces`, {
        method: 'GET',
        headers: { Authorization: getToken('superadmin') }
    }).then((value) => value.json());
};

const createWorkspace = (name) => {
    return fetch(`${SERVICE_ORIGIN}/superadmin/workspaces`, {
        body: JSON.stringify({ name }),
        method: 'POST',
        headers: { Authorization: getToken('superadmin') }
    }).then((value) => value.json());
};

const deleteWorkspace = (id) => {
    return fetch(`${SERVICE_ORIGIN}/superadmin/workspaces/${id}`, {
        method: 'DELETE',
        headers: { Authorization: getToken('superadmin') }
    });
};

module.exports = { createWorkspace, getAllWorkspaces, deleteWorkspace };

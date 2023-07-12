const { getToken } = require('./token');
const axios = require('axios');

require('dotenv').config();

// Extracted from .env file.
const SERVICE_ORIGIN = process.env.SERVICE_ORIGIN;

const getAllWorkspaces = () => {
    return axios.get(`${SERVICE_ORIGIN}/workspaces`, {
        headers: { Authorization: getToken('superadmin') }
    }).then((response) => response.data);
};

const createWorkspace = (name) => {
    return axios.post(`${SERVICE_ORIGIN}/superadmin/workspaces`, JSON.stringify({ name }), {
        headers: { Authorization: getToken('superadmin') }
    }).then((response) => response.data);
};

const deleteWorkspace = (id) => {
    return axios.delete(`${SERVICE_ORIGIN}/superadmin/workspaces/${id}`, {
        headers: { Authorization: getToken('superadmin') }
    });
};

module.exports = { createWorkspace, getAllWorkspaces, deleteWorkspace };

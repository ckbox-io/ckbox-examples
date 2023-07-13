const { getAllWorkspaces } = require('./api');

require('dotenv').config();

getAllWorkspaces()
    .then((workspaces) => {
        console.log('Use following IDs to restrict user access to workspaces:');
        console.log(workspaces.items.map(({ id }) => id));
    })
    .catch(console.error);

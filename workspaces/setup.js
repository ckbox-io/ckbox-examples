const { getAllWorkspaces, createWorkspace } = require('./api');

require('dotenv').config();

Promise.all(process.env.WORKSPACES.split(',').map(createWorkspace))
    .then(() => {
        return getAllWorkspaces();
    })
    .then((workspaces) => {
        console.log('Workspaces created successfully!');
        console.log('Use following IDs to restrict user access to workspaces:');
        console.log(workspaces.items);
    })
    .catch(console.error);

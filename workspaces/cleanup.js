const { getAllWorkspaces, deleteWorkspace } = require('./api');

require('dotenv').config();

getAllWorkspaces()
    .then((workspaces) => {
        // The default workspace cannot be removed, so skip it.
        return Promise.all(
            workspaces.items.slice(1).map(({ id }) => deleteWorkspace(id))
        );
    })
    .then(() => {
        console.log('Workspaces deleted successfully!');
    })
    .catch(console.error);

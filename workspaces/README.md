# CKBox Workspaces

:warning: This is just a code sample. It is NOT ready for production use!

Workspaces allow for creating private workspaces for users. Each user (or admin) can have access to any number of workspaces.

With workspaces a new role is introduced, `superadmin`, for users who control access to workspaces.
Users with `superadmin` role have unrevovkable access to all workspaces.

## Quick start

1. Create `.env` file in the sample root and add following entries (replace `***` with actual values):

```
ENVIRONMENT_ID=***
ACCESS_KEY=***
SERVICE_ORIGIN=https://api.ckbox.io
WORKSPACES=***
```

Values for ENVIRONMENT_ID and ACCESS_KEY can be found in the dashboard.
SERVICE_ORIGIN is where CKBox API can be accessed.
WORKSPACES is a list of all workspaces that will be created by `setup.js` script. Use comma-separated values, e.g.:

```
WORKSPACES=Workspace A,Workspace B,Workspace C
```

2. Install packages:

```
npm install
```

3. Setup workspaces:

```
node setup
```

4. Add following entries to `.env` file:

```
USER_ALLOWED_WORKSPACES=***
ADMIN_ALLOWED_WORKSPACES=***
```

USER_ALLOWED_WORKSPACES is a comma-separated list of workspace IDs that `user` role will have access to.
ADMIN_ALLOWED_WORKSPACES is a comma-separated list of workspace IDs that `admin` role will have access to.
Use IDs from the list returned by `node setup` script.
In order to list all workspaces run `node list`.
In order to delete all workspaces except for default workspace run `node cleanup`.

Note: User with `superadmin` role will have access to all workspaces.

5. Go to `public/index.html` file and adjust the `tokenUrl` config.

Serve sample:

```
npm start
```

Sample will be available at http://localhost:4137.

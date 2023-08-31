# CKBox Token Endpoint

:warning: This is just a code sample. It is NOT ready for production use!

The role of token endpoints is to authorize end users of your application to use CKBox. Following token endpoints will be exposed by the server:

-   `/token` - generates token with `user` role
-   `/token/admin` - generates token with `admin` role
-   `/token/superadmin` - generates token with `superadmin` role

Read more about user roles [here](https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#user-roles).

Before proceeding with this example, make sure that you created an environment and obtained its access credentials. Please refer to official [CKBox documentation](https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#creating-access-credentials) for more info.

## Quick start

Create a `.env` file in the sample root and add following entries (replace `***` with actual values):

```
ENVIRONMENT_ID=***
ACCESS_KEY=***
```

Install packages:

```
npm install
```

Serve sample:

```
npm start
```

Sample will be available at http://localhost:4137. Use following credentials to log in:

```
Login: ckbox
Password: ckbox
```

OPTIONAL:

1. Use `/token/superadmin` as `tokenUrl` to login as `superadmin` and create few workspaces in Settings / Superadmin view.
2. Now, limit user's access to selected workspaces by adding `ALLOWED_WORKSPACES` to `.env` file with comma-separated list of workspace IDs user has access to, e.g. `ALLOWED_WORKSPACES=0S5-AoLLmWYoYu9-evzD,xTFVB3x6WQ1QSalptc71`.
3. Use `/token` endpoint to login as `user`. Your access will be limited to workspaces listed via `ALLOWED_WORKSPACES`.

Please note that access to workspaces can be restricted for users with role `user` and `admin` only. Users with `superadmin` role have access to all workspaces.

## Documentation

Please refer to official [CKBox documentation](https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html) for more info.

Detailed info regarding environments management can be found [here](https://ckeditor.com/docs/cs/latest/guides/environments-management.html).

Info regarding token endpoints can be found [here](https://ckeditor.com/docs/cs/latest/guides/security/token-endpoint.html).

Read more about workspaces [here](https://ckeditor.com/docs/ckbox/latest/features/file-management/workspaces.html).

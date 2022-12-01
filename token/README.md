# CKBox Token Endpoint

:warning: This is just a code sample. It is NOT ready for production use!

The role of token endpoints is to authorize end users of your application to use CKBox. Within this example, two token endpoints are provided: `/token` and `token/admin` which produce tokens for regular users and admins respectively. Read more about user roles [here](https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#user-roles).

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

## Documentation

Please refer to official [CKBox documentation](https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html) for more info.

Detailed info regarding environments management can be found [here](https://ckeditor.com/docs/cs/latest/guides/environments-management.html).

Info regarding token endpoints can be found [here](https://ckeditor.com/docs/cs/latest/guides/security/token-endpoint.html).

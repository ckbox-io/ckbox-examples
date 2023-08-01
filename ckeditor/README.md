# CKEditor integration

:warning: This is just a code sample. It is NOT ready for production use!

CKBox feature is enabled by default in all the [predefined CKEditor builds](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/predefined-builds.html).

To enable CKBox in your CKEditor instance, add all the required configuration options to the object under the `ckbox` property. In the simplest scenario, CKBox requires only the `tokenUrl` option.

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

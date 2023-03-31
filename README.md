# CKBox Examples

This repository contains various examples of how CKBox can be integrated with a client app. In particular, showcases for the following popular frameworks and libraries are provided:

-   [Angular](angular)
-   [React](react)
-   [Vue](vue)

In addition, following examples can be found:

-   [Using CKBox as an ECMAScript module](esm)
-   [Using CKBox with a legacy version of React](react-legacy)
-   [Using CKBox with Next.js](react-nextjs)
-   [CKBox REST API](rest-api)
-   [Token endpoint for CKBox](token)
-   [Using UMD build of CKBox](umd)
-   [Using CKBox with Webpack](webpack)

## Quick start

:warning: Each instance of CKBox requires `tokenUrl` to be configured. Please use your own url before running a sample. See [documentation](https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html) for more info.

Each example is exposed as a separate package that provides a set of common commands.

Install dependencies before running a sample:

```
npm install
```

Build sample (this step should be omitted in the _token_ and _rest-api_ samples):

```
npm run build
```

Serve sample:

```
npm start
```

Sample will be available at http://localhost:4137.

## Documentation

Please refer to official [documentation](https://ckeditor.com/docs/ckbox/latest/guides/index.html) for more info.

import type { mount, version, React } from 'ckbox';

declare global {
    const CKBox: {
        mount: typeof mount;
        version: typeof version;
        React: typeof React;
    };
}

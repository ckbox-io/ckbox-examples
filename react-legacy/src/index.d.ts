import type { mount, version } from 'ckbox';

declare global {
    const CKBox: {
        mount: typeof mount;
        version: typeof version;
    };
}

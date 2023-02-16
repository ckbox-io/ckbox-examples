import 'ckbox/dist/ckbox.js';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('Missing #app element');
}

CKBox.mount(app, {
    dialog: true,
    tokenUrl: 'https://your.token.url'
});
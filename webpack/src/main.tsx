import * as CKBox from 'ckbox';
import 'ckbox/dist/styles/ckbox.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('Missing #app element');
}

CKBox.mount(app, {
    dialog: true,
    tokenUrl: 'https://your.token.url'
});

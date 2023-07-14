import 'ckbox/dist/ckbox.js';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('Missing #app element');
}

CKBox.mount(app, {
    assets: {
        onChoose: (assets) => {
            /* eslint-disable-next-line */
            console.log(assets);
        }
    },
    dialog: true,
    tokenUrl: 'https://dev.ckbox.io/demo/token/'
});

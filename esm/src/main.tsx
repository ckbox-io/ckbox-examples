import * as CKBox from 'ckbox';
import 'ckbox/dist/styles/ckbox.css';

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
    serviceOrigin: 'https://ckbox.cke-cs-dev.com',
    tokenUrl: 'https://768scew4f6zw.cke-cs-dev.com/token/dev/74188cf8ad0c10d9371edb51c6c558168319cc5d528d2cb9caa74795d8a8?limit=10'
});

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
    tokenUrl: 'https://ogq0jhtp46z5.cke-cs.com/token/dev/89a92c6541a37db33b6bf789356c34caeada2f87e7279a22199e70575199?limit=10'
});

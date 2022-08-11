/* eslint-disable no-console */

import ejs from 'ejs';
import fs from 'fs-extra';
import * as path from 'path';
import * as url from 'url';

try {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const dist = path.resolve(__dirname, 'dist');
    const src = path.resolve(__dirname, 'node_modules/ckbox/dist');

    fs.mkdirSync(dist, { recursive: true });
    const dirContent = fs.readdirSync(src);

    dirContent.forEach((name) => {
        const from = path.resolve(src, name);
        const to = path.resolve(dist, name);
        fs.copySync(from, to);
    });

    ejs.renderFile(
        './index.ejs',
        {
            ASSETS_ORIGIN: process.env.ASSETS_ORIGIN,
            API_ORIGIN: process.env.API_ORIGIN,
            TOKEN_URL: process.env.TOKEN_URL
        },
        (err, str) => {
            if (err) {
                throw new Error('Could not render EJS');
            }
            fs.writeFileSync(path.resolve(dist, 'index.html'), str);
        }
    );

    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}

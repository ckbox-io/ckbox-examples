import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@ckbox/components/dist/styles/ckbox.css';

const app = document.getElementById('app');

if (!app) {
    throw new Error('Missing #app element');
}

ReactDOM.createRoot(app).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

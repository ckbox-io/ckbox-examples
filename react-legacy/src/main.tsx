import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = document.getElementById('app');

if (!app) {
    throw new Error('Missing #app element');
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    app
);

import Contact from './pages/contact.js';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
        <main>
            ${Contact()}
        </main>
    `;

    const elements = [
        document.querySelector('form'),
        document.querySelector('#email'),
        document.querySelector('#reason'),
        document.querySelector('#message'),
        document.querySelector('#btn-send'),
        document.querySelector('#btn-reset'),
    ];

    getElementsFromDom(elements);
});

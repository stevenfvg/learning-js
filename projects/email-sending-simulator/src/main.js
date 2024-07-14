// Views or pages.
import Contact from './pages/contact.js';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
        ${Contact()}
    `;

    const  elements = [];

    getElementsFromDom(elements);
});

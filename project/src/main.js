// Template components.

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
        
    `;

    const elements = [];

    getElementsFromDom(elements);
});

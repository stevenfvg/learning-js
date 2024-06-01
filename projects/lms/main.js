// Template components.
import Header from './layout/header.js';

import { getElementsFromDom } from './app.js';
import header from './layout/header.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
        ${header()}
    `;

    console.log('Documents uploaded successfully!');
    console.log(app);
});

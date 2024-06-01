// Template components.
import Header from './layout/header.js';
import Hero from './layout/hero.js';
import InfoBar from './layout/infoBar.js';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
        ${Header()}
        ${Hero()}
        ${InfoBar()}
    `;
    
});

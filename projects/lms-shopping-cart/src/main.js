// Template components.
import Header from './layout/header.js';
import Hero from './layout/hero.js';
import InfoBar from './layout/infoBar.js';
import CourseList from './layout/courseList.js';
import Footer from './layout/footer.js';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
        ${Header()}
        ${Hero()}
        ${InfoBar()}
        ${CourseList()}
        ${Footer()}
    `;

    const elements = [
        document.querySelector('#itemsInShoppingCart'),
        document.querySelector('#shoppingCart'),
        document.querySelector('#shoppingCart-list'),
        document.querySelector('#empty-shoppingCart'),
        document.querySelector('#course-list'),
    ];

    getElementsFromDom(elements);
});

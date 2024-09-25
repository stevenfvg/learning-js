import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
		<div></div>
	`;

    const elements = [];

    getElementsFromDom(elements);
});

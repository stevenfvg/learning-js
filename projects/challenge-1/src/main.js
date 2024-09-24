// Import Bootstrap styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { getElementsFromDom } from './app';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.querySelector('#app');
	app.innerHTML = `

	`;

	const elements = [];

	getElementsFromDom(elements);
});

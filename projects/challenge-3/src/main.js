// Import Bootstrap styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import sections of the layout.

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.querySelector('#app');
	app.innerHTML = `
		<div></div>
	`;

	const elements = [];

	getElementsFromDom(elements);
});

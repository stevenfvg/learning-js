// Import Bootstrap styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import sections of the layout.
import leftSection from './layout/leftSection.js';
import rightSection from './layout/rightSection.js';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
		<div class="vh-100 py-4 d-flex align-items-center justify-content-center">
            ${leftSection()}
            ${rightSection()}
        </div>
	`;

    const elements = [];

    getElementsFromDom(elements);
});

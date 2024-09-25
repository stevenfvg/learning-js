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
		<div class="container-fluid vh-100">
            <div class="row py-3">
                ${leftSection()}
                ${rightSection()}
            </div>
        </div>
	`;

    const elements = [
        document.querySelector('#record-form'),
        document.querySelector('#first-name'),
        document.querySelector('#last-name'),
        document.querySelector('#age'),
        document.querySelector('#email'),
        document.querySelector('#record-list'),
        document.querySelector('#edit-index'),
    ];

    getElementsFromDom(elements);
});

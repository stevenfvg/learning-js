// Import Bootstrap styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import sections of the layout.
import filterSection from './layout/filterSection';
import mainSection from './layout/mainSection.js';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.querySelector('#app');
	app.innerHTML = `
		<div class="container-fluid vh-100">
			<div class="row">
				${filterSection()}
				${mainSection()}
			</div>
		</div>
	`;

	const elements = [];

	getElementsFromDom(elements);
});

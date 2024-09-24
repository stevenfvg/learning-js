// Import Bootstrap styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import components.
import Card from './components/productCard.js';
import Info from './components/infoContainer.js';

import { getElementsFromDom } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = `
		<div class="vh-100 py-4 d-flex align-items-center justify-content-center">
			${Card()}
			${Info()}
		</div>
	`;

    const elements = [
        document.querySelector('#selected-quantity'),
        document.querySelector('#selected-color'),
        document.querySelector('#price'),
        document.querySelector('#calculate-total'),
        document.querySelector('#total-amount'),
        document.querySelector('#quantity'),
        document.querySelector('.rounded-circle'),
    ];

    getElementsFromDom(elements);
});

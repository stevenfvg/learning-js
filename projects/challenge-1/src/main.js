import { getElementsFromDom } from './app';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.querySelector('#app');
	app.innerHTML = `

	`;

	const elements = [];

	getElementsFromDom(elements);
});

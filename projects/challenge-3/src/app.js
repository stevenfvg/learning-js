import { validateInputForm } from './util/validation.js';

// import data.
import dataProperties from './data/properties.json';

export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [
        // filterForm,
        roomsInput,
        fromInput,
        toInput,
        total,
        propertyContainer,
    ] = elements;
    const properties = dataProperties;

    const showProperties = () => {
        total.textContent = `${properties.length}`;
        properties.forEach(property => {
            const col = document.createElement('DIV');
            col.classList.add('col');
            col.innerHTML = `
                <div class="card" key="${property.id}">
                    <img src="${property.src}" class="card-img-top" height="200px" />
                    <div class="card-body text-center">
                        <h5 class="card-title">${property.name}</h5>
                        <div class="d-flex justify-content-between">
                            <p class="text-sm mb-1">Rooms: ${property.rooms}</p>
                            <p class="text-sm mb-1">Meters: ${property.m} m&sup2;</p>
                        </div>
                        <p class="card-text text-sm text-truncate fw-light">${property.description}</p>
                        <button type="button" class="btn btn-secondary w-100 mx-auto" disabled>
                            <i class="bi bi-eye mr-1"></i>
                            See more
                        </button>
                    </div>
                </div>
            `;
            propertyContainer.appendChild(col);
        });
    };

    // Function to load event listeners to interact with elements.
    const loadEventListeners = () => {
        // Validate each form field through events.
        roomsInput.addEventListener('input', validateInputForm);
        fromInput.addEventListener('input', validateInputForm);
        toInput.addEventListener('input', validateInputForm);
    };

    // Initial display.
    showProperties();
    // Load all the event listeners.
    loadEventListeners();
}

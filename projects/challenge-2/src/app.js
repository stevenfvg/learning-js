import { validateEmail, validateForm } from "./utils/validation.js";

export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [
        recordForm,
        firstNameInput,
        lastNameInput,
        ageInput,
        emailInput,
        recordList,
        editIndexInput,
    ] = elements;

    // Initialize records from local storage
    let records = JSON.parse(localStorage.getItem('records')) || [];

    // Display records
    const displayRecords = () => {
        recordList.innerHTML = '';
        const row = document.createElement('tr');
        if (records.length === 0) {
            row.innerHTML = `<td colspan="5" class="text-center text-danger">No Record Found</td>`;
            recordList.appendChild(row);
        } else {
            records.forEach((record, index) => {
                row.innerHTML = `
                    <td>${record.name}</td>
                    <td>${record.age}</td>
                    <td>${record.email}</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-outline-primary" onclick="editRecord(${index})">
                            <i class="bi bi-pen me-1"></i>Edit
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteRecord(${index})">
                            <i class="bi bi-trash me-1"></i>Delete
                        </button>
                    </td>
                `;
                recordList.appendChild(row);
            });
        }
    };

    // Function to load event listeners to interact with elements.
    const loadEventListeners = () => {
        recordForm.addEventListener('submit', handleFormSubmit);
    };

    // 
    const handleFormSubmit = event => {
        event.preventDefault();

        // Call the validation function before continuing
        if (validateForm(firstNameInput, lastNameInput, ageInput, emailInput)) {
            const name = `${firstNameInput.value} ${lastNameInput.value}`;
            console.log(`Name: ${name}`);
        }
    }

    // Initial display.
    displayRecords();
    // Load all the event listeners.
    loadEventListeners();
}

import { isDuplicate, validateForm } from './utils/validation.js';

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

    // Initialize records from local storage.
    let records = JSON.parse(localStorage.getItem('records')) || [];

    // Function to reset fields and validation classes.
    const resetForm = () => {
        // Reset input values
        firstNameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';
        emailInput.value = '';

        // Remove validation classes and feedback messages
        firstNameInput.classList.remove('is-valid', 'is-invalid');
        firstNameInput.nextElementSibling.textContent = '';
        lastNameInput.classList.remove('is-valid', 'is-invalid');
        lastNameInput.nextElementSibling.textContent = '';
        ageInput.classList.remove('is-valid', 'is-invalid');
        ageInput.nextElementSibling.textContent = '';
        emailInput.classList.remove('is-valid', 'is-invalid');
        emailInput.nextElementSibling.textContent = '';
    };

    // Display records
    const displayRecords = () => {
        recordList.innerHTML = '';
        if (records.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="5" class="text-center text-danger">No Record Found</td>`;
            recordList.appendChild(row);
        } else {
            records.forEach((record, index) => {
                const row = document.createElement('tr');
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

    // Add or Update a record
    const handleFormSubmit = event => {
        event.preventDefault();

        // Call the validation function before continuing
        if (validateForm(firstNameInput, lastNameInput, ageInput, emailInput)) {
            const name = `${firstNameInput.value} ${lastNameInput.value}`;
            const age = ageInput.value;
            const email = emailInput.value;
            const editIndex = parseInt(editIndexInput.value);

            console.log(`Name: ${name}`);
            console.log(`Age: ${age}`);
            console.log(`Email: ${email}`);
            console.log(`Edit Index: ${editIndex}`);

            if (name && age && email) {
                if (isDuplicate(records, email) && editIndex === -1) {
                    alert('Student already exists.');
                    return;
                }

                if (editIndex === -1) {
                    // Add a new record.
                    records.push({ name, age, email });
                } else {
                    // Update an existing record.
                    records[editIndex] = { name, age, email };
                    editIndexInput.value = -1;
                }

                localStorage.setItem('records', JSON.stringify(records));
                resetForm();
                displayRecords();
            }
        }
    };

    // Initial display.
    displayRecords();
    // Load all the event listeners.
    loadEventListeners();
}

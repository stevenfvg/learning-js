import { isDuplicate, validateInputForm } from './utils/validation.js';
import Swal from 'sweetalert2';

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
    // Uncomment the following line to see the log table in the browser console:
    // console.table(records);

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
                    <td class="text-nowrap text-truncate" style="max-width: 150px;">${record.name}</td>
                    <td class="text-nowrap text-truncate" style="max-width: 150px;">${record.age}</td>
                    <td class="text-nowrap text-truncate" style="max-width: 150px;">${record.email}</td>
                    <td class="text-nowrap text-truncate" style="max-width: 150px;">
                        <button type="button" class="btn btn-sm btn-outline-primary" data-index="${index}" data-action="edit">
                            <i class="bi bi-pen me-1"></i>Edit
                        </button>
                    </td>
                    <td class="text-nowrap text-truncate" style="max-width: 150px;">
                        <button type="button" class="btn btn-sm btn-outline-danger" data-index="${index}" data-action="delete">
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
        // Validate each form field through events.
        firstNameInput.addEventListener('input', validateInputForm);
        lastNameInput.addEventListener('input', validateInputForm);
        ageInput.addEventListener('input', validateInputForm);
        emailInput.addEventListener('input', validateInputForm);

        // Event listener for form submission.
        recordForm.addEventListener('submit', handleFormSubmit);

        // Event delegation: Attach event listener to recordList (the parent container).
        recordList.addEventListener('click', event => {
            const target = event.target.closest('button');
            if (target) {
                const index = target.getAttribute('data-index');
                const action = target.getAttribute('data-action');

                if (action === 'edit') {
                    editRecord(index);
                } else if (action === 'delete') {
                    confirmDeleteRecord(index);
                }
            }
        });
    };

    // Add or Update a record
    const handleFormSubmit = event => {
        event.preventDefault();
        
        const name = `${firstNameInput.value} ${lastNameInput.value}`;
        const age = ageInput.value;
        const email = emailInput.value;
        const editIndex = parseInt(editIndexInput.value);

        if (name && age && email) {
            if (isDuplicate(records, email) && editIndex === -1) {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Student already exists!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                resetForm();
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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Record successful!',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    // Edit a record
    const editRecord = index => {
        const recordToEdit = records[index];

        firstNameInput.value = recordToEdit.name.split(' ')[0];
        lastNameInput.value = recordToEdit.name.split(' ')[1];
        ageInput.value = recordToEdit.age;
        emailInput.value = recordToEdit.email;
        editIndexInput.value = index;
    };

    const confirmDeleteRecord = index => {
        Swal.fire({
            title: 'Are you sure you want to delete the record?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                deleteRecord(index);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Record deleted!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    // Delete a record
    const deleteRecord = index => {
        records.splice(index, 1);
        localStorage.setItem('records', JSON.stringify(records));
        displayRecords();
    };

    // Initial display.
    displayRecords();
    // Load all the event listeners.
    loadEventListeners();
}

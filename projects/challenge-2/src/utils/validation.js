import { observeIsValid } from '../helper/validationHelpers.js';

// Function to validate duplicate students.
export const isDuplicate = (records, email) => {
    return records.some(
        record => record.email.toLowerCase() === email.toLowerCase()
    );
};

// Validate the format of the first or last name.
const validateFirstNameOrLastName = value => {
    const re = /^[A-Za-z]+$/;
    return re.test(String(value));
};

// Validate age format.
const validateAge = value => {
    const re = /^[0-9]+$/;
    return re.test(String(value));
};

// Validate the email format.
const validateEmail = value => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(value));
};

const removeValidationWarning = (element) => {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    element.nextElementSibling.classList.add('valid-feedback');
    element.nextElementSibling.textContent = '';
};

// Main function to validate that all values ​​entered into the form are correct.
export const validateInputForm = event => {
    const element = event.target;
    const elementValue = event.target.value.trim();
    const id = event.target.id;

    let isValid = true;

    // Validate that the fields are not empty.
    if (elementValue === '') {
        element.classList.add('is-invalid');
        if (id === 'first-name') {
            element.nextElementSibling.textContent = 'Please enter your first name.';
            isValid = false;
        } else if (id === 'last-name') {
            element.nextElementSibling.textContent = 'Please enter your last name.';
            isValid = false;
        } else if (id === 'age') {
            element.nextElementSibling.textContent = 'Age is required.';
            isValid = false;
        } else if (id === 'email') {
            element.nextElementSibling.textContent = 'Email is required.';
            isValid = false;
        }
        observeIsValid();
        return isValid;
    } else if (elementValue.indexOf(' ') !== -1) {
        element.classList.add('is-invalid');
        if (id === 'first-name') {
            element.nextElementSibling.textContent = 'Enter only one name (no spaces).';
            isValid = false;
        } else if (id === 'last-name') {
            element.nextElementSibling.textContent = 'Enter only the first last name (without spaces).';
            isValid = false;
        } else {
            element.nextElementSibling.textContent = 'Invalid format';
            isValid = false;
        }
        observeIsValid();
        return isValid;
    } else {
        // Capitalize the first/last name.
        if (id === 'first-name' || id === 'last-name') {
            const formattedValue = elementValue.charAt(0).toUpperCase() + elementValue.slice(1).toLowerCase();
            element.value = formattedValue;
        }
        // Format the email field to lowercase letters.
        if (id === 'email') {
            const formattedValue = elementValue.toLowerCase();
            element.value = formattedValue;
        }
        removeValidationWarning(element);
    }

    // Format specific validations.
    if ((id === 'first-name' && !validateFirstNameOrLastName(elementValue)) || (id === 'last-name' && !validateFirstNameOrLastName(elementValue))) {
        element.classList.add('is-invalid');
        element.nextElementSibling.textContent = 'Only letters are allowed.';
        isValid = false;
    } else if (id === 'age' && !validateAge(elementValue)) {
        element.classList.add('is-invalid');
        element.nextElementSibling.textContent = 'Age must be a positive integer.';
        isValid = false;
    } else if (id === 'age' && parseInt(elementValue) < 18) {
        element.classList.add('is-invalid');
        element.nextElementSibling.textContent = 'You must be older than 18.';
        isValid = false;
    } else if (id === 'email' && !validateEmail(elementValue)) {
        element.classList.add('is-invalid');
        element.nextElementSibling.textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    observeIsValid(element);
};
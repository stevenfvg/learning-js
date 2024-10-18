import { observeIsValid } from '../helper/validationHelpers.js';

const removeValidationWarning = element => {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    element.nextElementSibling.classList.add('valid-feedback');
    element.nextElementSibling.textContent = '';
};

const validateNumberOfRooms = value => {
    const re = /^[0-9]+$/;
    return re.test(String(value));
};

const validateSquareMeters = value => {
    const re = /^\d+(\.\d{1,2})?$/;
    return re.test(String(value));
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
        if (id === 'rooms' || id === 'from' || id === 'to') {
            element.nextElementSibling.textContent = 'The field is required.';
            isValid = false;
        }
        observeIsValid();
        return isValid;
    } else if (elementValue.indexOf(' ') !== -1) {
        element.classList.add('is-invalid');
        if (id === 'rooms' || id === 'from' || id === 'to') {
            element.nextElementSibling.textContent = 'Invalid format';
            isValid = false;
        }
        observeIsValid();
        return isValid;
    } else {
        removeValidationWarning(element);
    }

    // Format specific validations.
    if (id === 'rooms' && !validateNumberOfRooms(elementValue)) {
        element.classList.add('is-invalid');
        element.nextElementSibling.textContent = 'Invalid format';
        isValid = false;
    } else if ((id === 'from' && !validateSquareMeters(elementValue)) || (id === 'to' && !validateSquareMeters(elementValue))) {
        element.classList.add('is-invalid');
        element.nextElementSibling.textContent = 'Invalid format';
        isValid = false;
    }
    observeIsValid(element);
};

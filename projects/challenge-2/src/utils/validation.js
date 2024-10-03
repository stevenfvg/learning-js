// Validate the email format.
export const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Function to validate that fields are not empty or contain spaces.
export const validateForm = (
    firstNameInput,
    lastNameInput,
    ageInput,
    emailInput
) => {
    let isValid = true;
    const namePattern = /^[A-Za-z]+$/; // Regular expression to validate only letters.

    // Validate the "First Name" field.
    let firstNameValue = firstNameInput.value.trim();
    if (firstNameValue === '') {
        firstNameInput.classList.add('is-invalid');
        firstNameInput.nextElementSibling.textContent =
            'Please enter your first name.';
        isValid = false;
    } else if (firstNameValue.indexOf(' ') !== -1) {
        firstNameInput.classList.add('is-invalid');
        firstNameInput.nextElementSibling.textContent =
            'Enter only one name (no spaces).';
        isValid = false;
    } else if (!namePattern.test(firstNameValue)) {
        firstNameInput.classList.add('is-invalid');
        firstNameInput.nextElementSibling.textContent =
            'Only letters are allowed.';
        isValid = false;
    } else {
        firstNameValue =
            firstNameValue.charAt(0).toUpperCase() + firstNameValue.slice(1);
        firstNameInput.value = firstNameValue;
        firstNameInput.classList.remove('is-invalid');
        firstNameInput.classList.add('is-valid');
        firstNameInput.nextElementSibling.classList.add('valid-feedback');
        firstNameInput.nextElementSibling.textContent = '';
    }

    // Validate the "Last Name" field.
    let lastNameValue = lastNameInput.value.trim();
    if (lastNameValue === '') {
        lastNameInput.classList.add('is-invalid');
        lastNameInput.nextElementSibling.textContent =
            'Please enter your last name.';
        isValid = false;
    } else if (lastNameValue.indexOf(' ') !== -1) {
        lastNameInput.classList.add('is-invalid');
        lastNameInput.nextElementSibling.textContent =
            'Enter only the first last name (without spaces).';
        isValid = false;
    } else if (!namePattern.test(lastNameValue)) {
        lastNameInput.classList.add('is-invalid');
        lastNameInput.nextElementSibling.textContent =
            'Only letters are allowed.';
        isValid = false;
    } else {
        lastNameValue =
            lastNameValue.charAt(0).toUpperCase() + lastNameValue.slice(1);
        lastNameInput.value = lastNameValue;
        lastNameInput.classList.remove('is-invalid');
        lastNameInput.classList.add('is-valid');
        lastNameInput.nextElementSibling.classList.add('valid-feedback');
        lastNameInput.nextElementSibling.textContent = '';
    }

    return isValid;
};

// Function to validate duplicate students.
// export const isDuplicate = email => {
//     return records.some(
//         record => record.email.toLowerCase() === email.toLowerCase()
//     );
// };

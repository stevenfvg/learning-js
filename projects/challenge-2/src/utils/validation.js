// Validate the email format.
export const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Function to validate duplicate students.
export const isDuplicate = (records, email) => {
     return records.some(
         record => record.email.toLowerCase() === email.toLowerCase()
     );
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
    const agePattern = /^[0-9]+$/; // Regular expression to validate only positive integers.

    // Validate the "First name" field.
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
            firstNameValue.charAt(0).toUpperCase() + firstNameValue.slice(1).toLowerCase();
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
            lastNameValue.charAt(0).toUpperCase() + lastNameValue.slice(1).toLowerCase();
        lastNameInput.value = lastNameValue;
        lastNameInput.classList.remove('is-invalid');
        lastNameInput.classList.add('is-valid');
        lastNameInput.nextElementSibling.classList.add('valid-feedback');
        lastNameInput.nextElementSibling.textContent = '';
    }

    // Validate the "Age" field.
    let ageValue = ageInput.value.trim();
    if (ageValue === '') {
        ageInput.classList.add('is-invalid');
        ageInput.nextElementSibling.textContent = 'Age is required.';
        isValid = false;
    } else if (!agePattern.test(ageValue)) {
        ageInput.classList.add('is-invalid');
        ageInput.nextElementSibling.textContent = 'Age must be a positive integer.';
        isValid = false;
    } else if (parseInt(ageValue) < 18) {
        ageInput.classList.add('is-invalid');
        ageInput.nextElementSibling.textContent = 'You must be older than 18.';
        isValid = false;
    } else {
        ageInput.classList.remove('is-invalid');
        ageInput.classList.add('is-valid');
        ageInput.nextElementSibling.classList.add('valid-feedback');
        ageInput.nextElementSibling.textContent = ''; 
    }

    // Validate the "Email" field.
    let emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emailInput.classList.add('is-invalid');
        emailInput.nextElementSibling.textContent = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(emailValue)) {
        emailInput.classList.add('is-invalid');
        emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailValue = emailValue.toLowerCase();
        emailInput.value = emailValue;
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        emailInput.nextElementSibling.classList.add('valid-feedback');
        emailInput.nextElementSibling.textContent = '';
    }

    return isValid;
};


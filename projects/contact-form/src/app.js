export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [formContact, email, reason, message, btnSend, btnRest] = elements;

    const emailData = {
        email: '',
        reason: '',
        message: '',
    };

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Function to load event listeners to interact with elements.
    const loadEventListeners = () => {
        email.addEventListener('blur', assignValues);
        reason.addEventListener('blur', assignValues);
        message.addEventListener('blur', assignValues);
        // Add event listener to the submit button.
        btnSend.addEventListener('click', validate, false);
    };

    const checkEmailData = () => {
        if (Object.values(emailData).includes('')) {
            btnSend.disabled = true;
        } else {
            btnSend.disabled = false;
        }
    };

    // Function to assign values ​​to the emailData object.
    const assignValues = e => {
        if (e.target.id === 'email') {
            emailData[e.target.id] = e.target.value.trim().toLowerCase();
        } else {
            emailData[e.target.id] = e.target.value.trim();
        }

        checkEmailData();
        console.log(emailData);
    };

    const validate = e => {
        // Prevent default form submission.
        e.preventDefault();

        // Trim the inputs.
        email.value = email.value.trim();
        message.value = message.value.trim();

        // Check if the email matches the regex pattern.
        if (!regex.test(email.value)) {
            e.stopPropagation();
            email.setCustomValidity('Please enter a valid email address.');
        } else {
            email.setCustomValidity('');
        }

        // Check if the form is valid.
        if (!formContact.checkValidity()) {
            e.stopPropagation();
        }

        // Add Bootstrap validation styles.
        formContact.classList.add('was-validated');
    };

    loadEventListeners();
}

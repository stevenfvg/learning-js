export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [formContact, email, reason, message, btnSend, btnRest] = elements;

    // Function to load event listeners to interact with elements.
    const loadEventListeners = () => {
        // Add event listener to the submit button.
        btnSend.addEventListener("click", validate, false);
    };

    const validate = e => {
        // Prevent default form submission.
        e.preventDefault();

        // Trim the inputs.
        email.value = email.value.trim();
        message.value = message.value.trim();

        // Check if the form is valid.
        if (!formContact.checkValidity()) {
            e.stopPropagation();
        }
        
        // Add Bootstrap validation styles.
        formContact.classList.add('was-validated');
    };

    loadEventListeners();
}

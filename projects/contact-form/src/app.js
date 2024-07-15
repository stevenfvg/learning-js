export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [formContact, email, reason, message, btnSend, btnRest] = elements;

    // Function to load event listeners to interact with elements.
    const loadEventListeners = () => {
        // Events are added to the input elements.
        email.addEventListener('blur', validate);
        reason.addEventListener('blur', validate);
        message.addEventListener('blur', validate);
    };

    const validate = e => {
        console.log(e.target.value);
    };

    loadEventListeners();
}

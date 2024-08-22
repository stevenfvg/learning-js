// Function that is executed when all the HTML has been loaded into the DOM.
document.addEventListener('DOMContentLoaded', () => {
    // Mouse Event.
    const mouseButton = document.getElementById('mouseButton');
    mouseButton.addEventListener('click', () => {
        alert('You clicked the mouse');
    });

    // Input event.
    const textArea = document.getElementsByTagName('textarea')[0];
    textArea.addEventListener('input', () => {
        console.log('Text: ', textArea.value);
    });

    // Submit event on a form.
    const formSubmit = document.getElementById('formSubmit');
    formSubmit.addEventListener('submit', event => {
        event.preventDefault(); // Prevent the default form from being submitted.

        const inputName = document.querySelector(
            '#formSubmit input[type="text"]'
        );
        const validator = inputName.nextElementSibling; // Select the invalid-feedback div next to the input.
        let inputValue = inputName.value.trim(); // Gets the value of the input and removes leading and trailing whitespace.

        if (inputValue === '') {
            inputName.classList.add('is-invalid');
            validator.textContent = 'Please enter your name.'; // Set custom error message.
            return; // Stops execution if field is empty.
        } else if (inputValue.indexOf(' ') !== -1) {
            inputName.classList.add('is-invalid');
            validator.textContent = 'Enter only one name (no spaces).';
            return; // Stops execution if field contains spaces.
        } else {
            inputValue =
                inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
            inputName.value = inputValue; // Update input value with capitalized name.
            inputName.classList.remove('is-invalid');
            validator.classList.remove('invalid-feedback');
            inputName.classList.add('is-valid');
            validator.classList.add('valid-feedback');
            validator.textContent = 'Submitted form'; // Clear the custom error message.
            console.log(`Name entered: ${inputValue}`);
        }

        if (!formSubmit.checkValidity()) {
            event.stopPropagation(); // Stop propagation if the form is invalid.
        }

        formSubmit.classList.add('was-validated'); // Add was-validated class to form after validation.
    });

    // Event when scrolling with the mouse.
    const boxWithDisplacement = document.getElementById('scrollDiv');
    boxWithDisplacement.addEventListener('scroll', () => {
        console.log('');
    });

    // Event Bubbling
    const outerButton = document.getElementById('outerButton');
    const innerButton = document.getElementById('innerButton');
    const eventBubbling = document.getElementById('eventBubbling');

    outerButton.addEventListener('click', () => {
        console.log('Exterior clicked');
    });

    innerButton.addEventListener('click', event => {
        event.stopPropagation(); // Prevent bubbling
        console.log('Inside clicked');
    });

    eventBubbling.addEventListener('click', () => {
        console.log('Container div clicked');
    });
});

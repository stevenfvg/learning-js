// Helper function to log the state of isValid.
// export const logIsValid = (isValid) => {
//     console.log('isValid:', isValid);
// };

// Helper function to observe real-time changes to the is-invalid class.
export const observeIsValid = () => {
    const inputs = ['first-name', 'last-name', 'age', 'email'];
    const allValid = inputs.every(id => {
        const inputElement = document.getElementById(id);
        return !inputElement.classList.contains('is-invalid') && inputElement.value.trim() !== '';
    });

    const submitButton = document.getElementById('submit-btn');
    if (allValid) {
        submitButton.removeAttribute('disabled'); // Enable the button
    } else {
        submitButton.setAttribute('disabled', 'true'); // Disable the button
    }
};
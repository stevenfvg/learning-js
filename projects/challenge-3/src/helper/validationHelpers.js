// Helper function to observe real-time changes to the is-invalid class.
export const observeIsValid = () => {
    const inputs = ['rooms', 'from', 'to'];
    const allValid = inputs.every(id => {
        const inputElement = document.getElementById(id);
        return !inputElement.classList.contains('is-invalid') && inputElement.value.trim() !== '';
    });

    const searchButton = document.getElementById('search-btn');
    if (allValid) {
        searchButton.removeAttribute('disabled'); // Enable the button.
    } else {
        searchButton.setAttribute('disabled', 'true'); // Disable the button.
    }
};

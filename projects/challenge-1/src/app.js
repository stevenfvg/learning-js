export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [
        selectedQuantity,
        selectedColor,
        priceOfTheProduct,
        btnCalculateTotal,
        totalAmount,
        totalQuantity,
        productColor,
    ] = elements;

    // Check HTML elements:
    console.log(selectedQuantity);
    console.log(selectedColor);
    console.log(priceOfTheProduct);
    console.log(btnCalculateTotal);
    console.log(totalAmount);
    console.log(totalQuantity);
    console.log(productColor);

    // Function to load event listeners to interact with elements.
    const loadEventListeners = () => {
        // Adding event listener for input event on quantity input field.
        selectedQuantity.addEventListener('input', handleInputQuantity);
        // Adding event listener for keydown event on quantity input field.
        selectedQuantity.addEventListener('keydown', handleKeydownQuantity);
        // Adding event listener for click event on the calculate button.
        btnCalculateTotal.addEventListener('click', calculateTheTotal);
    };

    // Function to handle input event for the quantity input field.
    const handleInputQuantity = event => {
        let quantityValue = event.target.value;
        console.log(quantityValue);
    };

    // Function to handle keydown event for the quantity input field.
    const handleKeydownQuantity = event => {
        const controlKeys = ['Backspace', 'ArrowUp', 'ArrowDown'];
        console.log(controlKeys);
    };

    // Function to calculate the total price based on quantity and product price.
    const calculateTheTotal = event => {
        event.preventDefault();
        console.log('Try clicking on the calculate total button.');
    };

    // Load all the event listeners.
    loadEventListeners();
}

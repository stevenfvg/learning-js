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

    // Extracting and parsing the price of the product from the DOM element.
    const price = priceOfTheProduct.innerText || priceOfTheProduct.textContent;
    const rawPrice = Number(price.replace(/[\$,]/g, ''));

    // Initializing the starting amount and displaying it.
    const startingAmount = 0;
    totalAmount.innerHTML = `${startingAmount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    })}`;

    // Initializing the starting quantity and displaying it.
    const startingQuantity = 0;
    totalQuantity.innerHTML = `${startingQuantity}`;

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

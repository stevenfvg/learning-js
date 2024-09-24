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
        // Check if the value does not comply with the pattern.
        if (!/^[1-9]$/.test(quantityValue)) {
            if (quantityValue >= 10) {
                alert('Only values ​​from 1 to 9 are allowed.');
                // If the value is invalid, clear it.
                quantityValue = '';
            }
        }
        // Update the input field value with the valid quantity.
        event.target.value = quantityValue;
    };

    // Function to handle keydown event for the quantity input field.
    const handleKeydownQuantity = event => {
        const controlKeys = ['Backspace', 'ArrowUp', 'ArrowDown'];

        // Allow control keys without restriction.
        if (controlKeys.includes(event.key)) {
            return;
        }

        // Allows only one digit between 1 and 9.
        if (!/^[1-9]$/.test(event.key)) {
            event.preventDefault();
        }
    };

    // Function to calculate the total price based on quantity and product price.
    const calculateTheTotal = event => {
        event.preventDefault();
        const quantity = parseInt(selectedQuantity.value);
        const color = selectedColor.value;

        // Validate if the quantity is selected.
        if (selectedQuantity.value === '' || selectedQuantity.value === NaN) {
            alert(
                'You must select the quantity of the product to calculate the total.'
            );
            return;
        }

        // Validate if the color is selected.
        if (
            selectedColor.value === '' ||
            selectedColor.value === 'color' ||
            selectedColor.value === 'Color'
        ) {
            alert(
                'You must select the color of the product to continue with the operation.'
            );
            return;
        } else {
            // Calculate the total price.
            const total = quantity * rawPrice;
            // Display the total price.
            totalAmount.innerHTML = `${total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
            })}`;
            // Display the selected quantity.
            totalQuantity.innerHTML = `${quantity}`;

            // Update the product color display.
            productColor.classList.remove('bg-secondary');
            productColor.style.backgroundColor = color;
        }
    };

    // Load all the event listeners.
    loadEventListeners();
}

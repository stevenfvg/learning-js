// Delete element from DOM (Example).

// Select the first element that has the class 'container' in the HTML document.
const element = document.querySelector('.container');

// Removes the third child element of the previously selected element.
element.removeChild(element.children[2]);

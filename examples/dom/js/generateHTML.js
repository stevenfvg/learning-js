// Create a new <p> element in the document.
const hashtag = document.createElement('p');

// Sets the text content of the previously created <p> element.
hashtag.textContent = '#DocumentObjectModel';

// Searches the document for the first element that has the class 'container' and saves it in the variable 'container'.
const container = document.querySelector('.container');

// Adds the created <p> element to the end of the 'container' element.
container.appendChild(hashtag);

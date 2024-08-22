/* DOM (Document Object Model): 
    The DOM is a tree-structured representation of an HTML or XML document. 
    When a web browser loads a web page, it creates a representation of the page's content as objects that can be manipulated using JavaScript. 
    Each HTML element becomes an object in the DOM, organized in a hierarchy that reflects the structure of the document. 
    This allows JavaScript to dynamically access, modify, and manipulate elements and content on a web page. */

// Get the entire Document object in the console.
console.log(document);
// Get the domain of the current document.
console.log(`Domain: ${document.domain}`);
// Get the total number of HTML elements in the Document.
console.log(`Elements: ${document.all.length}`);

// Get the entire <head> object of the Document in the console.
console.log(document.head);
// Get the number of <meta> elements within the <head>
console.log(`Metadata: ${document.head.querySelectorAll('meta').length}`);
// Get the number of <link> elements within the <head>
console.log(`Links: ${document.head.querySelectorAll('link').length}`);
// Get the total number of child elements within the <head>
console.log(`Child elements: ${document.head.childElementCount}`);

// Get the entire <body> object of the Document in the console.
console.log(document.body);

/* querySelectorAll: This is also a method of the Document object, but instead of returning just one element, it returns a collection (NodeList) of all the elements that match a given CSS selector. 
You can use it to select multiple elements and then iterate over them. For example: 

const elements = document.querySelectorAll('.element-class');
elements.forEach(element => {
  // Do something with each element
});

In summary, the DOM is the structured representation of the content of an HTML or XML document in the form of a tree of objects. \
querySelector and querySelectorAll are methods that allow you to select specific elements in the DOM using CSS selectors, either to select a single element or multiple at once. 
These functions are essential for dynamically manipulating and working with web content using JavaScript. */

// Get the total number of elements with a "class" attribute in the Document.
console.log(`Classes: ${document.querySelectorAll('[class]').length}`);
// Get the total number of elements with an "id" attribute in the Document.
console.log(`Identifiers: ${document.querySelectorAll('[id]').length}`);

/* querySelector: This is a method belonging to the Document object in JavaScript. It allows you to select and return the first element that matches a specified CSS selector. 
The CSS selector is a string that follows the same rules as those used in CSS stylesheets. For example, if you have an element with the id "my-element," you can select it as follows: 

const element = document.querySelector('#my-element');

This returns the first element with the id "my-element" in the DOM. */

// Get the number of attributes of the ".container" class (assuming it exists).
console.log(
    `Containers: ${document.querySelector('.container').attributes.length}`
);
// Get the total number of <div> elements within the <body>
console.log(`Divisions: ${document.body.querySelectorAll('div').length}`);
// Get the total number of <a> (link) elements within the <body>
console.log(`Links: ${document.links.length}`);
// Get the total number of <img> elements within the <body>
console.log(`Images: ${document.images.length}`);
// Get the total number of <form> elements within the <body>
console.log(`Forms: ${document.forms.length}`);

// Get document element by ID.
console.log(`Title: ${document.getElementById('title').textContent}`);
// Get document element by CSS class name.
console.log(`Icons: ${document.getElementsByClassName('icon-link').length}`);

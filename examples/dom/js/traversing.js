// Examples using Traversing The DOM.

// Get first child element using firstElementChild.
const firstElementChild = document.body.firstElementChild;
console.log('First child element:');
console.log(firstElementChild);

// Get last child element using lastElementChild.
const lastElementChild = document.body.lastElementChild;
console.log('Last child element:');
console.log(lastElementChild);

// Get all child nodes using childNodes.
const childNodes = document.body.childNodes;
console.log('Child nodes:');
console.log(childNodes);

// Get all children elements using children.
const elementsChildren = document.body.children;
console.log('Child elements:');
console.log(elementsChildren);

// Get the node type of the first child using nodeType.
const firstChildType = document.body.firstElementChild.nodeType;
console.log('First child node type:');
console.log(firstChildType);

// Obtener el siguiente elemento hermano utilizando nextElementSibling.
const nextElementSibling = document.head.nextElementSibling;
console.log('Next sibling element:');
console.log(nextElementSibling);

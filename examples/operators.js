// Examples of Operators and typeof

// Comparison operators
const x = 10;
const y = 5;

console.log(x < y); // false
console.log(x > y); // true
console.log(x >= y); // true
console.log(x <= y); // false

// Same (compare value)
console.log(x == y); // false

// Strict equals (compares value and data type)
console.log(x === y); // false

// Different (compare value)
console.log(x != y); // true

// Different strict (compare value and data type)
console.log(x !== y); // true

// typeof: check the type of a variable
const string = 'hello';
const number = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { name: 'Steven' };
const nullValue = null;
const undefinedValue = undefined;

console.log(typeof string); // "string"
console.log(typeof number); // "number"
console.log(typeof boolean); // "boolean"
console.log(typeof array); // "object"
console.log(typeof object); // "object"
console.log(typeof nullValue); // "object" (This is a quirk of JavaScript!)
console.log(typeof undefinedValue); // "undefined"
// Examples of Booleans
// Boolean variable declaration
const isTrue = true;
const isFalse = false;

console.log(isTrue); // true
console.log(isFalse); // false

// Comparison operators that return booleans
const x = 10;
const y = 5;

const isOlder = x > y; // true
const isEqual = x === y; // false

console.log(isOlder);
console.log(isEqual);

// Logical operators that return booleans
const and = isTrue && isFalse; // false
const or = isTrue || isFalse; // true
const negation = !isTrue; // false

console.log(and);
console.log(or);
console.log(negation);

// Converting other data types to boolean
let number = 42;
    string = 'Hello';
    array = [];
    object = {};

number = Boolean(number); // true (any number other than 0 is true)
string = Boolean(string); // true (any non-empty string is true)
array = Boolean(array); // true (any non-empty array is true)
object = Boolean(object); // true (any non-empty object is true)

console.log(number);
console.log(string);
console.log(array);
console.log(object);

// Advanced example with the ternary operator:
const authenticated = true;
console.log(authenticated ? 'If it is authenticated' : 'It is not authenticated');
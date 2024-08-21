// Array Methods and Spread Operator

// The .some() method checks if at least one element meets the condition
const numbers = [1, 3, 5, 7, 9];
const result = numbers.some(value => value % 2 === 0);
console.log('Is there at least one even number?', result);

// The .findIndex() method finds the index of the first element that meets the condition
const valueIndex = numbers.findIndex(value => value === 5);
console.log('Index of number 5:', valueIndex);

// The .reduce() method reduces the array to a single value by applying an accumulator function
const totalValue = numbers.reduce(
    (accumulator, value) => accumulator + value,
    0
);
console.log('Sum of the numbers:', totalValue);

// The .filter() method filters the elements that meet the condition
const evenValues = numbers.filter(value => value % 2 === 0);
console.log('Pair numbers:', evenValues);

// The .find() method finds the first element that meets the condition
const conditionalValue = numbers.find(value => value > 6);
console.log('First number greater than 6:', conditionalValue);

// The .every() method checks if all elements meet the condition
const valuesGreaterThanOne = numbers.every(value => value > 1);
console.log('Are all numbers greater than 1?', valuesGreaterThanOne);

// The .concat method: combines two or more arrays
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'spinach'];
const food = fruits.concat(vegetables);
console.log('Combined foods:', food);

// Spread Operator: another way to combine arrays.
const desserts = ['cake', 'ice cream'];
const menu = [...food, ...desserts];
console.log('Combined menu:', menu);
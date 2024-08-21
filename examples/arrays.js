// Examples of Arrays
// Create an array
const fruits = ['Apple', 'Banana', 'Grape'];
console.table(fruits);

// Access array values
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Grape"

// Measure the length of the array
const length = fruits.length;
console.log(`Array length: ${length}`); // 3

// Loop through the array with a for loop
console.log('Looping through the array with a for loop:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Loop through the array with forEach
console.log('Looping through the array with forEach:');
fruits.forEach(fruit => {
    console.log(fruit);
});

// Iterate and transform the 'fruits' array with .map
console.log('Show fruits in uppercase');
const fruitsInUppercase = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsInUppercase);

// Add values to the beginning of the array
fruits.unshift('Raspberry');
console.log("Array after adding 'Raspberry':", fruits);

// Add values to the end of the array
fruits.push('Strawberry');
console.log("Array after adding 'Strawberry':", fruits);

// Using the Spread Operator
let copyOfTheFruitsArray;
// Add value to start in array copy
copyOfTheFruitsArray = ['Peach', ...fruits];
console.log("Array after adding 'Peach':", copyOfTheFruitsArray);
// Add value to the end in the array copy
copyOfTheFruitsArray = [...fruits, 'Pineapple'];
console.log("Array after adding 'Pineapple':", copyOfTheFruitsArray);

// Delete the last value from the array
const arrayWithTheLastElementRemoved = fruits.pop();
console.log(`Last item removed: ${arrayWithTheLastElementRemoved}`);
console.log('Array after removing last element:', fruits);

// Delete the first value from the array
const arrayWithFirstElementRemoved = fruits.shift();
console.log(`First item removed: ${arrayWithFirstElementRemoved}`);
console.log('Array after removing first element:', fruits);

// Find the index of an element in the array
const indexFound = fruits.indexOf('Banana');
console.log(`Item: ${indexFound}`);

// Delete an element at a specific position
const deletedItem = fruits.indexOf('Grape');
fruits.splice(deletedItem, 1);
console.log("Array after removing 'grape':", fruits);

// Create a new array with filtered elements
const filteredItems = fruits.filter(fruit => fruit !== 'Banana');
console.log('New filtered array:', filteredItems);

// Destructuring in arrays
const [apple, banana] = fruits;
console.log(apple); // "Apple"
console.log(banana); // "Banana"
// Examples of arrays

// Create an array
const fruits = ['apple', 'banana', 'grape'];
console.table(fruits);

// Access array values
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "grape"

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
fruits.unshift('raspberry');
console.log("Array after adding 'raspberry':", fruits);

// Add values to the end of the array
fruits.push('strawberry');
console.log("Array after adding 'strawberry':", fruits);

// Using the Spread Operator
let copyOfTheFruitsArray;
// Add value to start in array copy
copyOfTheFruitsArray = ['peach', ...fruits];
console.log("Array after adding 'peach':", copyOfTheFruitsArray);
// Add value to the end in the array copy
copyOfTheFruitsArray = [...fruits, 'pineapple'];
console.log("Array after adding 'pineapple':", copyOfTheFruitsArray);

// Delete the last value from the array
const arrayWithTheLastElementRemoved = fruits.pop();
console.log(`Last item removed: ${arrayWithTheLastElementRemoved}`);
console.log('Array after removing last element:', fruits);

// Delete the first value from the array
const arrayWithFirstElementRemoved = fruits.shift();
console.log(`First item removed: ${arrayWithFirstElementRemoved}`);
console.log('Array after removing first element:', fruits);

// Find the index of an element in the array
const indexFound = fruits.indexOf('banana');
console.log(`Item: ${indexFound}`);

// Delete an element at a specific position
const deletedItem = fruits.indexOf('grape');
fruits.splice(deletedItem, 1);
console.log("Array after removing 'grape':", fruits);

// Create a new array with filtered elements
const filteredItems = fruits.filter(fruit => fruit !== 'banana');
console.log('New filtered array:', filteredItems);

// Destructuring in arrays
const [apple, banana] = fruits;
console.log(apple); // "apple"
console.log(banana); // "banana"

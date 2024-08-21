// Example of Iterators
// For loop
console.log('For loop:');

for (let i = 1; i <= 5; i++) {
    console.log(i % 2 === 0 ? `${i} is EVEN` : `${i} is ODD`);
}

// Practical example of the For Loop
// FizzBuzz Exercise - 100 Numbers
// 3, 6, 9, 12 ... fizz
// 5, 10, 15, 20 ... buzz
// 15, 30, 45 ... FIZZBUZZ!

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ!!!`);
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`);
    }
}

// Break and Continue in a For loop
console.log('For loop with break and continue:');
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    if (i === 0) {
        continue; // Jump to next iteration when i equals 0
    }
    console.log(i);
}

// While loop
console.log('While loop:');
let j = 1; // Initialize the while
while (j <= 5) {
    console.log(j);
    j++; // Increase
}

// Do-While loop
console.log('Do-While loop:');
let k = 1; // Start
do {
    console.log(k);
    k++;
} while (k <= 5);

// forEach
console.log('forEach in an Array:');
const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));

// .map() method in an Array
console.log('.map() method in an Array');
const numbers = [1, 2, 3];
const squares = numbers.map(value => value ** 2);
console.log(squares);

// For...of in an iterable (Array)
console.log('For...of in an Array:');
const letters = ['a', 'b', 'c'];

for (let letter of letters) {
    console.log(letter);
}

// For...in in an object
console.log('For...in in an object:');
const person = {
    name: 'Steven',
    age: 30,
    city: 'Caracas',
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

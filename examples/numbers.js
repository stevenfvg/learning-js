// Examples of numbers and mathematical operations

// Number
const x = 10;
y = 5;

// Addition
const addition = x + y;
console.log(`The sum of ${x} and ${y} is equal to: ${addition}`);

// Subtraction
const subtraction = x - y;
console.log(`Subtraction: ${subtraction}`);

// Multiplication
const multiplication = x * y;
console.log(`Multiplication: ${multiplication}`);

// Division
const division = x / y;
console.log(`Division: ${division}`);

// Module (rest of division)
const divisionModule = x % y;
console.log(`Module: ${divisionModule}`);

// Using the Math object

// round: rounding to the nearest whole number
const decimalNumber = 3.7;
const roundeDecimalNumber = Math.round(decimalNumber);
console.log(`Rounded number ${decimalNumber}: ${roundeDecimalNumber}`);

// ceil: rounding to the nearest integer
const numberRoundedUp = Math.ceil(decimalNumber);
console.log(`Round up: ${numberRoundedUp}`);

// floor: round to the smallest whole number
const numberRoundedDown = Math.floor(decimalNumber);
console.log(`Rounding down: ${numberRoundedDown}`);

// sqrt: calculate the square root
const squareRoot = Math.sqrt(x);
console.log(`Square root of ${x}: ${squareRoot}`);

// abs: calculate the absolute value
const negativeValue = -7;
const absoluteValue = Math.abs(negativeValue);
console.log(`Absolute value of ${negativeValue}: ${absoluteValue}`);

// pow: calculate the power of a value
const base = 2;
const exponent = 3;
const pow = Math.pow(base, exponent);
console.log(`${base} raised to the ${exponent} is equal to: ${pow}`);

// min: minimum value between several numbers
const minValue = Math.min(x, y, negativeValue);
console.log(`The smallest number is: ${minValue}`);

// max: maximum value between several numbers
const maxValue = Math.max(x, y, negativeValue);
console.log(`The largest number is: ${maxValue}`);

// random: generate a random number between 0 (inclusive) and 1 (exclusive)
const randomNumber = Math.random();
console.log(`Random number between 0 and 1: ${randomNumber.toFixed(1)}`);
// Examples of string and template string methods

// Define a string
const exampleString = 'Hello World!';
console.log(`- String: ${exampleString}`);

// length: get the length of the string
const stringLength = exampleString.length;
console.log(`- Length: ${stringLength}`);

// indexOf: find the position of a substring in the string
const substringPosition = exampleString.indexOf('World');
console.log(`- The word "World" begins in the position: ${substringPosition}`);

// includes: check if a substring is present in the string
const checkSubstring = exampleString.includes('Hello');
console.log(`- Does the string contain the word "Hello"?: ${checkSubstring}`);

// concat: concatenate strings
const otherString = ' what a beautiful day!';
const concatenatedString = exampleString.concat(otherString);
console.log(concatenatedString);

// trimStart, trimEnd and trim: Remove whitespace at the beginning, end or both ends
const stringWithSpaces = '   Spaces   ';

const noSpacesAtStart = stringWithSpaces.trimStart();
const noSpacesAtTheEnd = stringWithSpaces.trimEnd();
const noSpacesAtBothEnds = stringWithSpaces.trim();

console.log(`- No spaces at the beginning: "${noSpacesAtStart}"`);
console.log(`- No spaces at the end: "${noSpacesAtTheEnd}"`);
console.log(`- No spaces at both ends: "${noSpacesAtBothEnds}"`);

// replace: Replace one substring with another
const replacedString = exampleString.replace('World', 'friends');
console.log(replacedString);

// slice: get a portion of a string
const substring = exampleString.slice(2, 6);
console.log(`- Substring: "${substring}"`);

// substring: get a substring from indexes
const substring2 = exampleString.substring(2, 6);
console.log(`- Substring (substring): "${substring2}"`);

// charAt: get the character at a specific position
const character = exampleString.charAt(5);
console.log(`- Character in position 5: "${character}"`);

// repeat: repeat a string a certain number of times
const repeatedString = 'Hello '.repeat(3);
console.log(`- String repeated 3 times: "${repeatedString}"`);

// split: split a string into an array of substrings
const words = exampleString.split(' ');
console.log(`- Words separated by spaces: ${JSON.stringify(words)}`);

// toUpperCase: convert to uppercase
const uppercaseString = exampleString.toUpperCase();
console.log(`- Uppercase string: "${uppercaseString}"`);

// toLowerCase: convert to lowercase
const lowercaseString = exampleString.toLowerCase();
console.log(`- Lowercase string: "${lowercaseString}"`);

// toString: convert to string (although it is already a string)
const stringConvertedToString = exampleString.toString();
console.log(`- String converted to string: "${stringConvertedToString}"`);

// Template string
const name = 'Steven';
age = 30;
message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
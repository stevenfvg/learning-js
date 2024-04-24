// Control Structures

// If-else
const age = 25;

if (age < 18) {
  console.log('You are a minor');
} else if (age >= 18 && age < 65) {
  console.log('You are an adult');
} else {
  console.log('You are an older adult');
}

// Operator AND (&&) y OR (||)
const isAdult = true;
const hasDriverLicense = false;

if (isAdult && hasDriverLicense) {
  console.log('You can drive');
} else if (isAdult || hasDriverLicense) {
  console.log('You are close to driving');
} else {
  console.log("You can't drive");
}

// Switch
const paymentMethod = 'cash';

switch (paymentMethod) {
  case 'cash':
    console.log(`You paid with ${paymentMethod}`);
    break;
  case 'debit card':
    console.log(`You paid with ${paymentMethod}`);
    break;
  case 'credit card':
    console.log(`You paid with ${paymentMethod}`);
    break;
  case 'check':
    console.log(`You paid with ${paymentMethod}`);
    break;
  default:
    console.log('You have not yet selected a payment method');
}

// Ternary operator
const authenticated = true;
console.log(authenticated ? 'Yeah! is authenticated' : 'No! is not authenticated');
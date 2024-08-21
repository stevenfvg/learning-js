// Examples of objects and their methods
// An object groups everything into a single variable

// Creation of an object of type (object literal)
const person = {
    name: 'Steven',
    age: 30,
    city: 'Caracas',
};

// Access object values
console.log(person.name); // "Steven"
console.log(person.age); // 30
console.log(person.city); // "Caracas"

// Add a new property to the object
person.job = 'Developer';
console.log(person.job); // "Developer"

// Remove a property from the object
delete person.city;
console.log(person.city); // undefined

// Destructuring of objects
const { name, age } = person;
console.log(name); // "Steven"
console.log(age); // 30

// Objects within objects
const car = {
    brand: 'Toyota',
    model: 'Camry',
};

const owner = {
    name: 'Ana',
    vehicle: car,
};

console.log(owner.vehicle.brand); // "Toyota"

// Destructuring nested objects
const {
    name: ownerName,
    vehicle: { brand: carBrand },
} = owner;
console.log(ownerName); // "Ana"
console.log(carBrand); // "Toyota"

// Freeze an object (cannot add, delete, or modify properties)
Object.freeze(person);
person.salary = 50000; // This will have no effect
console.log(person.salary); // undefined
// Check if the object is frozen
console.log(Object.isFrozen(person)); // true

// Sealing an object (existing properties can be modified, but cannot be added or removed)
Object.seal(car);
car.model = 'Corolla'; // This will work
car.color = 'Azul'; // This will have no effect
// Check if the object is sealed
console.log(Object.isSealed(car)); // true

// Functions on objects
const calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

// Constructor object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const newPerson = new Person('María', 25);
console.log(newPerson.name); // "María"
console.log(newPerson.age); // 25

// Object.keys, Object.values and Object.entries
const fruit = {
    apple: 'red',
    banana: 'yellow',
    grape: 'purple',
};

const keys = Object.keys(fruit);
const values = Object.values(fruit);
const entries = Object.entries(fruit);

console.log(keys); // ["apple", "banana", "grape"]
console.log(values); // ["red", "yellow", "purple"]
console.log(entries); // [["apple", "red"], ["banana", "yellow"], ["grape", "purple"]]

// Join objects with Object.assign
const product = {
    description: '20 inch monitor',
    price: 300,
    stock: true,
};

const diameter = {
    weight: '1kg',
    extent: '1m',
};

const productWithDescription = Object.assign(product, diameter);
console.log(productWithDescription);

// Join objects with the Spread Operator or Rest Operator
const productDescription = { ...product, ...diameter };
console.log(productDescription);
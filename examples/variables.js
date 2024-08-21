// Example of how to use the let and const variables and their scope.
function scopeExample() {
    // Using let for a variable with function scope.
    let x = 10;
    console.log('Initial value of x:', x); // Output: Initial x inside function: 10

    if (true) {
        // Using const for a variable with block scope
        const y = 20;
        console.log('Value of y:', y); // Output: Initial y inside if block: 20

        // Reassigning let variable within the block
        x = 30;
        console.log('Updated value of x:', x); // Output: Updated x inside if block: 30

        // Reassigning const variable within the block (will result in an error).
        // y = 40; // Error: Assignment to constant variable.
    }

    console.log('Final value of x:', x); // Output: Final x outside if block: 30
}

scopeExample();
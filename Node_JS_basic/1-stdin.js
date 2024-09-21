// 1-stdin.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close(); // Close the interface after input is received
});

// Handle the close event to display the closing message
rl.on('close', () => {
    console.log("This important software is now closing");
});

// mdArray.js

// Prompt the user for names and ages
let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

// Convert the input strings into arrays
let namesArray = namesInput.split(',').map(name => name.trim()); // Trim whitespace
let agesArray = agesInput.split(',').map(Number); // Convert to numbers

// Create a multi-dimensional array to hold name-age pairs
let restructuredArray = [];

// Restructure the arrays
for (let i = 0; i < namesArray.length; i++) {
    restructuredArray.push([namesArray[i], agesArray[i]]);
}

// Log the restructured multi-dimensional array to the console
console.log("Restructured Multi-Dimensional Array (Name, Age):");
restructuredArray.forEach(pair => {
    console.log(`Name: ${pair[0]}, Age: ${pair[1]}`);
});
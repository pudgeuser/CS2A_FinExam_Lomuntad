// sortArray.js

let numbersInput = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57):");
let namesInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

let numbersArray = numbersInput.split(',').map(Number); // Convert to numbers
let namesArray = namesInput.split(',').map(name => name.trim()); // Trim whitespace

let mergedArray = numbersArray.concat(namesArray);
console.log("Merged Array:", mergedArray);

let sortedNumbers = numbersArray.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

let sortedNames = namesArray.sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
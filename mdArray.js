// mdArray.js

let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

let namesArray = namesInput.split(',').map(name => name.trim()); 
let agesArray = agesInput.split(',').map(Number); 

let restructuredArray = [];

for (let i = 0; i < namesArray.length; i++) {
    restructuredArray.push([namesArray[i], agesArray[i]]);
}

console.log("Restructured Multi-Dimensional Array (Name, Age):");
restructuredArray.forEach(pair => {
    console.log(`Name: ${pair[0]}, Age: ${pair[1]}`);
});

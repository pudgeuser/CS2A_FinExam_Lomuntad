// bubbleSort.js

// Initialize an array with the specified numbers
let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

// Function to add numbers to the array using prompt
function addNumbers() {
    let moreNumbers = true;
    while (moreNumbers) {
        const input = prompt("Enter a number to add to the array (or type 'done' to finish):");
        if (input.toLowerCase() === 'done') {
            moreNumbers = false;
        } else {
            const number = parseFloat(input);
            if (!isNaN(number)) {
                numbers.push(number);
                console.log(`Added ${number} to the array.`);
            } else {
                console.log("Please enter a valid number.");
            }
        }
    }
}

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            console.log(`Comparing ${arr[i]} and ${arr[i + 1]}`);
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                console.log(`Swapped ${arr[i + 1]} and ${arr[i]}`);
            }
        }
        n--; // Reduce the range of comparison
    } while (swapped);
}

// Main function to run the program
function main() {
    addNumbers(); // Allow user to add numbers
    console.log("Array before sorting:", numbers);
    bubbleSort(numbers); // Sort the array
    console.log("Sorted array:", numbers);
}

// Start the program
main();
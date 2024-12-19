// bubbleSort.js

let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

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
        n--; 
    } while (swapped);
}

function main() {
    addNumbers(); 
    console.log("Array before sorting:", numbers);
    bubbleSort(numbers); 
    console.log("Sorted array:", numbers);
}

main();

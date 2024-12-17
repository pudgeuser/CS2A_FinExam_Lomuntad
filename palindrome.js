// palindrome.js

let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

function reverseString(str) {
    return str.split('').reverse().join('');
}

let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

console.log("Original Word 1: " + word1);
console.log("Reversed Word 1: " + reversedWord1);
console.log("Original Word 2: " + word2);
console.log("Reversed Word 2: " + reversedWord2);

let isPalindrome1 = word1 === reversedWord1;
let isPalindrome2 = word2 === reversedWord2;

console.log("Is the first word a palindrome? " + isPalindrome1);
console.log("Is the second word a palindrome? " + isPalindrome2);
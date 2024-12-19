// groceryStacks.js

let groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  } else {
    return "Stack is not empty";
  }
}

function push(item) {
  console.log("Peeking before push:", peek()); 
  groceryStack.push(item);
  console.log("Current Stack:", groceryStack);
}

function pop() {
  console.log("Peeking before pop:", peek()); 
  if (groceryStack.length === 0) {
    console.log("Cannot pop from an empty stack.");
    return; 
  }
  groceryStack.pop();
  console.log("Current Stack:", groceryStack);
}

// Get 5 grocery items using prompt()
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  if (item) { 
    push(item);
  } else {
    console.log("No item entered. Skipping.");
  }
}

console.log("Popping an item:");
pop();

console.log("Popping another item:");
pop();

console.log("Trying to pop from an empty stack:");

groceryStack = [];
pop();

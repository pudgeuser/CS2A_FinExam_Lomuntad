// lloNodeListing.js

class Node {
    constructor(value) {
        this.value = value; // Set the value of the node
        this.next = null;   // Initialize the next node as null
    }
}

class LinkedList {
    constructor() {
        this.head = null;   // Initialize the head of the list as null
        this.size = 0;      // Initialize the size of the list as 0
    }

    append(value) {
        const newNode = new Node(value); // Create a new node with the given value

        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head
        } else {
            let current = this.head; // Start from the head
            while (current.next) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Link the new node at the end
        }

        this.size++; // Increment the size of the list
        this.print(); // Print the list after appending
    }

    print() {
        let current = this.head; // Start from the head
        let result = []; // Array to hold the values for printing

        while (current) {
            result.push(current.value); // Add the current node's value to the result array
            current = current.next; // Move to the next node
        }

        console.log("Linked List:", result.join(" -> ")); // Print the linked list
    }
}


const linkedList = new LinkedList();


linkedList.append("Data Structures - Array");
linkedList.append("Variable Type - Integer");
linkedList.append("Sorting Algorithm - Bubble Sort");
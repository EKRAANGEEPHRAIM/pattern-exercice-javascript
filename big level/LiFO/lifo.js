/**
 * The LIFO (Last In, First Out) principle explains why the algorithm goes deep before exploring side branches.
 */

//implement a stack 

// LIFO = Last In, First Out

class Stack {
    constructor() {
        this.items = [];
    }

    push(val) {
        this.items.push(val);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const stack = new Stack();

console.log("Empty stack ?", stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top :", stack.peek()); // 30
console.log("Pop :", stack.pop()); // 30
console.log("Top after pop :", stack.peek()); // 20
console.log("Size :", stack.size()); // 2
//Min stack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (!this.minStack.length || val <= this.getMin())
      this.minStack.push(val);
  }

  pop() {
    if (this.stack.pop() === this.getMin())
      this.minStack.pop();
  }

  top() { return this.stack[this.stack.length - 1]; }
  getMin() { return this.minStack[this.minStack.length - 1]; }
}

const myStack = new MinStack();
myStack.push(5);
myStack.push(3);
myStack.push(7);
console.log(myStack.getMin()); // display 3
myStack.pop();                 // remove 7
myStack.pop();                 // remove 3
console.log(myStack.getMin()); // display 5
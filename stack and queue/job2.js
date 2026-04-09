// implement a stack with min()


class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = [];
    }

    push(val){
        this.stack.push(val);
        // Correction : utilisation de .at(-1) pour lire le dernier élément
        const currentMin = this.minStack.at(-1) ?? Infinity;
        if(val <= currentMin) {
            this.minStack.push(val);
        }
    }

    pop(){
        const val = this.stack.pop();
        if(val === this.minStack.at(-1)) {
            this.minStack.pop();
        }
        return val;
    }
    
    top(){
        return this.stack.at(-1);
    }

    getMin(){
        return this.minStack.at(-1);
    }
}

const myStack = new MinStack();

console.log("1. Push 5 , 3 , 7");

myStack.push(5)
myStack.push(3)
myStack.push(7)
console.log("Min wanted(3) :" , myStack.getMin())

console.log("\n2. Push 2");
myStack.push(2);
console.log("Min attendu (2) :", myStack.getMin()); // 2

console.log("\n3. Pop (enlève le 2)");
myStack.pop();
console.log("Min attendu (3) :", myStack.getMin()); // 3

console.log("\n4. Push un doublon du min (3)");
myStack.push(3);
console.log("Min attendu (3) :", myStack.getMin()); // 3

console.log("\n5. Pop le doublon");
myStack.pop();
console.log("Min toujours attendu (3) :", myStack.getMin()); // 3

console.log("\n6. Top actuel");
console.log("Top attendu (7) :", myStack.top()); // 7
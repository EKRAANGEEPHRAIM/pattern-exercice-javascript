// implement a queue

class Queue {
    constructor () {
        this.items = []
    }

    enqueue(val) {
        this.items.push(val)
    }

    deqeue() {
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }
}

// implements a queue with 2 stacks
//FIFO — First In, First Out. Le premier entré est le premier sorti.
class MyQueue {
    constructor () {
        this.s1 = [];
        this.s2 = [];
    }


    push(x) {
        this.s1.push(x)
    }

    pop(){
    if (!this.s2.length)
      while (this.s1.length)
        this.s2.push(this.s1.pop());
    return this.s2.pop();
    }

      peek() {
    if (!this.s2.length)
      while (this.s1.length)
        this.s2.push(this.s1.pop());
    return this.s2[this.s2.length - 1];
  }

  empty(){
    return !this.s1.length && !this.s2.length;
  }
}
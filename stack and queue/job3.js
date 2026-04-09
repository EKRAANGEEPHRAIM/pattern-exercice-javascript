class MinStack {
    constructor(){
        const stack = [];
        const minStack = [];

    }

    push(valeur){
        this.stack.push(valeur);
        const min = this.minStack.at(-1) ?? Infinity
        if(valeur <= min){
            this.minStack.push()
        }
    }

    pop(){
        this.stack.pop()
        if(valeur === this.minStack.at(-1)){
            this.minStack.pop()
        }
        return valeur;
    }

    top (){
        return this.stack.at(-1)
    }

    getMin(){
        return this.minStack.at(-1)
    }
}
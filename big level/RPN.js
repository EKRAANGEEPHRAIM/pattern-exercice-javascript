/**
 * Reverse Polish Notation (RPN) is a method of mathematical notation where operators follow their operands.
Unlike the classical (infixed) notation such as 3 + 4 , 34 +, we write.
The calculation is based on a stack (LIFO: Last-In, First-Out)
 */

function evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === '+') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a + b);
        } 
        else if (token === '-') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a - b);
        } 
        else if (token === '*') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a * b);
        } 
        else if (token === '/') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(Math.trunc(a / b)); // truncate toward 0
        } 
        else {
            stack.push(Number(token));
        }
    }

    return stack[0];
}



console.log(evalRPN(["2", "1", "+", "3", "*"]))//9S
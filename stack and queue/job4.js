// Evaluate an RPN expression



function evalRPN(tokens) {
    const stack = []; // avoid stack

    //operators
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b), // Truncate towards zero
    };
    for (const token of tokens) {
        if (token in ops) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(ops[token](a, b));
        } else {
            stack.push(parseInt(token));
        }
}
return stack[0];
}


console.log(evalRPN(["2", "1", "+", "3", "*"])); // (2 + 1) * 3 = 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 4 + (13 / 5) = 4 + 2 = 6
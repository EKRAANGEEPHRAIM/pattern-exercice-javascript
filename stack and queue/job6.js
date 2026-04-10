// basic calculator 


function calculate(s) {
    let stack = [], result = 0, num = 0, sign = 1;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (!isNaN(parseInt(c)) && c !== ' ') {
            num = num * 10 + parseInt(c);
        } else if (c === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (c === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (c === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (c === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop(); // Le signe avant la parenthèse
            result += stack.pop(); // Le résultat avant la parenthèse
        }
    }
    return result + (sign * num);
}

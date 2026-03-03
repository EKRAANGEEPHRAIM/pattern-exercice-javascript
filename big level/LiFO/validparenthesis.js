//valid parenthesis

function isValid(s) {
    const stack = [];

    const map =  { ')': '(', ']': '[', '}': '{' };

    for(let char of s){
        if(map[char]){
            if(stack.pop() !== map[char]) return false;
        }else {
            stack.push(char);
        }
    }

    return stack.length === 0
}

//O(n)

//  valid cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("{[()]}"));    // true

//   invalid cases
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("((("));       // false
console.log(isValid("())"));       // false
// balanced parentheses
//LIFO
function isValid(str){
    const stack = [];
    const match = {')': '(', '}': '{', ']': '['};
    for(const c of str){
        if('([{'.includes(c)){
            stack.push(c);
        }else{
            if(stack.pop() !== match[c]) return false;

        }
    }

    return stack.length === 0;
}

console.log(isValid("()"))//true 
console.log(isValid("(]s"))//false
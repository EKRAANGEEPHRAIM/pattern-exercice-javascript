// find the first letter in capital letter

function firstUppercase(str){
    for(let char of str){
        if(char >= 'A' && char <= 'Z'){
            return char
        }

        return null;
    }
}
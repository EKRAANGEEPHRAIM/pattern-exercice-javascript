//find the first unique character

function firsUniqueChar(str) {
    const count = {};
    

    for(let char of str){
        count[char]= (count[char] || 0) + 1
    }

    for(let char of str) {
        if(count[char] === 1) return char;
    }

    return null;
}




console.log(firsUniqueChar('I brought a lot mango to my mother'))//I
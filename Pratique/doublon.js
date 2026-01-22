//remove duplicates from a string

function duplicateString(str){
    return [...new Set(str)].join("");
}

//O(n)


console.log(duplicateString(['a','n','g','e' , 'e' , 'a' , 't']))//anget
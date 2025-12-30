// remove all numbers


function removeNumber(str){
    return str.replace(/[0-9]/g, "");
}

console.log(removeNumber("1je 2manges")); // je manges
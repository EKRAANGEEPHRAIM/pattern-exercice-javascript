//remove duplicates

function removeDuplicate(arr){
    return [... new Set(arr)];//A Set object allows you to store a set of unique values ​​of any type, whether they are primitive values ​​or objects
}

console.log(removeDuplicate([1,1,2,3]))//[1,2,3]
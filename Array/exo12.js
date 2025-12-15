// delete the first element of an array

function removeFirst(arr){
    const rem = arr.slice();
    rem.shift();

    return rem;
}

// example 

console.log(removeFirst([1, 2 ,3]))


// find the index of element

function findNumber(arr, value) {
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === value) return i ;
    }

    return -1;
}

console.log(findNumber([1,2,3], 2))
//Check if an array is sorted

function isSortedRec(arr, i = 0 ) {
    if(i === arr.length - 1) return true;
    if(arr[i] > arr[i + 1] ) return false;
    return isSortedRec(arr, i + 1)
}


console.log(isSortedRec([2,1,5,9,4,3])) // false
console.log(isSortedRec([1,2,3])) // true
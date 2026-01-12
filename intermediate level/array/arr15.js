//  Rotate right

function rotateRight(arr, k){
    k = k % arr.length;//If k is larger than the size of the array, we avoid unnecessary rotation.


    //The slice() method of Array instances returns a shallow copy of a portion of an array as a new array object selected from start to end.
    return arr.slice(-k).concat(arr.slice(0, -k))
}

//o(n)

console.log(rotateRight([1,2,3,4,5], 1))// [5,1,2,3,4]

console.log(rotateRight([1,2,3,4,5], 3))// [3,4,5,1,2]
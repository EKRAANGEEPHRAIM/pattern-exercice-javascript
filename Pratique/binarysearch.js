// Binary search (sorted array)

function binarySearch(arr , target) {
 let left = 0 , right = arr.length - 1;

 while(left < right) {
    // The Math.floor(x) function returns the largest integer that is less than or equal to a number x.
    const mid = Math.floor((left + right) / 2);

    if(arr[mid] === target) return mid ;
    arr[mid] < target ? left = mid + 1 : right = mid - 1
 }

 return -1;
}

console.log(binarySearch([1,2,3,4,5], 3))




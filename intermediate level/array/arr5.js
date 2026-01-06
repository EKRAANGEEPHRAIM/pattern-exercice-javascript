// check if an array is sorted

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}


// O(n)


console.log(isSorted([2,3,1,5,4]))//false
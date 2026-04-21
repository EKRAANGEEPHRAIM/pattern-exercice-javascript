// binary search 

function binarySearchRec(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target)
      return binarySearchRec(arr, target, left, mid - 1);
    return binarySearchRec(arr, target, mid + 1, right);
  }
  // O(log n)

const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;

const result = binarySearchRec(arr, target);
console.log(result); // 3
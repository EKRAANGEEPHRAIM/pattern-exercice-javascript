//

function isSortedRec(arr, i = 0) {
  if (i === arr.length - 1) return true;
  if (arr[i] > arr[i + 1]) return false;
  return isSortedRec(arr, i + 1);
}
// O(n)


console.log(isSortedRec([2,5,9,1,6]))
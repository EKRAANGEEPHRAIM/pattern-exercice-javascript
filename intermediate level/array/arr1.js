// find the maximum value

function maxValue(arr) {
  let max = arr[0];
  for (let n of arr) if (n > max) max = n;
  return max;
}
// O(n)

console.log(maxValue([1,2,6,9,15,21,12]))
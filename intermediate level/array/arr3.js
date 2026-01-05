// count the positive numbers

function countPositive(arr) {
  let count = 0;
  for (let n of arr) if (n > 0) count++;
  return count;
}
// O(n)


console.log(countPositive([-1,-2,3]))//1
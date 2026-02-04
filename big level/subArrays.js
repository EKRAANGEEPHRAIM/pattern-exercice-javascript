//subArray

function subArrays(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let sub = [];
    for (let j = i; j < arr.length; j++) {
      sub.push(arr[j]);
      result.push([...sub]);
    }
  }
  return result;
}
// O(n²)


console.log(subArrays([1,2,3,4]))
/**
 * [
  [ 1 ],       [ 1, 2 ],%
  [ 1, 2, 3 ], [ 1, 2, 3, 4 ],
  [ 2 ],       [ 2, 3 ],
  [ 2, 3, 4 ], [ 3 ],
  [ 3, 4 ],    [ 4 ]
]

 */
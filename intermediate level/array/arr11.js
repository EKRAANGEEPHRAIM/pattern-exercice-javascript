// merge to arrays

function mergeArrays(a,b){
    return [...a, ...b]
}
//o(n + m)

console.log(mergeArrays([1,1],[2,3])) //[ 1, 1, 2, 3 ]
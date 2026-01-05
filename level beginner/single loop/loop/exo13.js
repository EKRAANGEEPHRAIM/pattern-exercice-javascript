// filter only  even numbers

function filterEven(arr) {
    return arr.filter(x => x % 2 === 0 )
}

console.log(filterEven([1,2,6,5])) // 2 , 6
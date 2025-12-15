// Average of an array


function average(arr) {
    if(!arr.length ) {
        return 0 ;
    }
// reduce is function in  javascipt which allows to take an array et returning only one  value
    const sum = arr.reduce((a , b) => a + b , 0)

    return sum / arr.length ;
}

console.log(average([15,12,9]))
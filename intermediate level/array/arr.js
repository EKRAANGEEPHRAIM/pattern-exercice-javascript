// sum of elements of array

function sumArray(arr){
    let sum = 0;

    for( let n of arr){
        sum += n
    }

    return sum;
}


console.log(sumArray([1,2,25,24]))//52
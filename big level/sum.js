//sum

function sumArrayRec(arr){
    if(arr.length === 0) return 0;

    return arr[0] + sumArrayRec(arr.slice(1))
}

console.log(sumArrayRec([1,4,6,7]))// 18
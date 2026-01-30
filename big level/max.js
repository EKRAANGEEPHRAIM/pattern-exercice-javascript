//max

function maxRec(arr){
    if(arr.length == 1) return arr[0];

    return Math.max(arr[0], maxRec(arr.slice(1)))
}


console.log(maxRec([1,5,25,58,36]))//58
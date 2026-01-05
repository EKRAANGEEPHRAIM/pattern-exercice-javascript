// find the minimum value

function minValue(arr){
    min = arr[0];

    for(let v of arr){
        if(v < min){
            return min = v
        }
    }

    return min;
}

///O(n)

console.log(minValue([1,2,3,4]));
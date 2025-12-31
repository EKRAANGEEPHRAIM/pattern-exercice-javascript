// count how many times a numbers appears

function countOccurrences(arr, t) {
    let count = 0 ;
    
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] === t ) {
            count++;
        }
    }
return count++;
}

console.log(countOccurrences([5,15,3,6,5], 5));//2D
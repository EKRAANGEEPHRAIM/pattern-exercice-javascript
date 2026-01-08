// count occurrences

function countOccurrences(arr){
    const map = {};

    for(let n of arr){
        map[n] = (map[n] || 0) + 1;


    }

    return map ;

}

console.log(countOccurrences([1,2,3,3,5]));// { '1': 1, '2': 1, '3': 2, '5': 1 }
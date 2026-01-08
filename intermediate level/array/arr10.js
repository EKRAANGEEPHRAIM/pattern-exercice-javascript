// count occurrences

function countOccurrences(arr){
    const map = {};

    for(let n of arr){
        map[n] = (map[n] || 0) + 1;


    }

    return map ;

}

console.log(countOccurrences([1,2,3,3,5]));// { '1': 1, '2': 1, '3': 2, '5': 1 }

// find the most frequent element

    function mostFrequent(arr){
        const freq = countOccurrences(arr);
        let max = 0 , result = null;


        for(let key in freq){
            if(freq[key] > max){
                max = freq[key];
                result = key;
            }
        }

        return result;
    }


    console.log(mostFrequent([1,1,2,2,2,3,5,4,4]))
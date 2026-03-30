function maxFrequency(arr){
    const map = new Map();

    let max = 0 , val = null;


    for(const x of arr){
        const c = (map.get(x) || 0) + 1;
        map.set(x , c);
        if(c > max){
            max = c ; val = x
        }

        
    }

    return {value : val , count : max}
}

console.log(maxFrequency([1, 3, 2, 1, 4, 1, 2, 1, 5, 3]))//{ value: 1, count: 4 }
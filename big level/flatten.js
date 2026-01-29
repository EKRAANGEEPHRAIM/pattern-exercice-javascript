// flatten an array

function flattenDeep(arr){
    let result = [];

    for(let el of arr){
        // The static method Array.isArray() determines whether the value passed is an Array.
        if(Array.isArray(el)){
            result = result.concat(flattenDeep(el));
        } else {
            result.push(el);
        }
    }
    
    return result; 
}

console.log(flattenDeep([1, 2, 3, 5, 4, 6, 3])); 
// [1, 2, 3, 5, 4, 6, 3]

console.log(flattenDeep([1, [2, 3], [4, [5, 6]]])); 
// [1, 2, 3, 4, 5, 6]

console.log(flattenDeep([[1, 2], [3, [4, [5]]]])); 
// [1, 2, 3, 4, 5]
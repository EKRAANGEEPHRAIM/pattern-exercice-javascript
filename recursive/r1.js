//Flatten an array (recursively)


// the goal is to flatten an array of any depth into a single-level array. The function will check if each element is an array, and if it is, it will call itself recursively to flatten that sub-array. If the element is not an array, it will be added to the result array.  
function flattenDeep(arr){
    let result = []; // initialize an empty array to store the flattened result


    // iterate through each element in the input array
    for(let el of arr){
        // check if the current element is an array
        if(Array.isArray(el)){
            result = result.concat(flattenDeep(el));// if it is an array, recursively call flattenDeep on that element and concatenate the result to the main result array
        }
        else{
            result.push(el)// if it is not an array, push the element directly to the result array
        }
    }
    return result;// return the fully flattened array
}
console.log(flattenDeep([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
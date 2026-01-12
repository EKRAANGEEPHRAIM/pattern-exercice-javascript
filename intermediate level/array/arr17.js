// check if two arrays are equal

function areEqual(arr1,arr2){
    if(arr1.length !== arr2.length) {
        return 'they are not equal.'
    };

    for(let i = 0 ; i < arr1.length ; i++){
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
//O(n)


console.log(areEqual([1,2,3,4], [4,2,3,1])); // false
console.log(areEqual([1,2,3,4], [1,2,3,4])); // true
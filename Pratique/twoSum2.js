// twoSum optimal


/**
 * @param {Array} arr
 * @param {number} target
 * @returns {Array}
 */
function twoSum(arr , target){

    //  A Map object contains key-value pairs and remembers the order in which the keys were inserted.
     
    const seen = new Map();


    for(let i = 0 ; i < arr.length ; i++ ){
        const difference = target - arr[i];
        //Instead of looking for two numbers, we look for the number that completes the other.

        if(seen.has(difference)){
            return [seen.get(difference), i]
        }

        seen.set(arr[i], i)
    }
}

//O(n)
console.log(twoSum([1,2,3,4,5,6], 9)) // [3 , 4]
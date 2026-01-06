// find the first duplicate

function firstDuplicate(arr){
 const seen = new Set();

for(let n of arr){
    if(seen.has(n)){
        return n
    }
    /**
     * The static `add()` method of the Atomics object adds a given value to an array element at a given position and returns the previous value that was contained at that position.
     */
    seen.add(n);
}
return null;

}


console.log(firstDuplicate([1,1,2,2,3]))//1
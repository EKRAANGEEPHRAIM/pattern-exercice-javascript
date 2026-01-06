// find each duplicates

function allDuplicates(arr){
    //A Set object allows you to store a set of unique values ​​of any type, whether they are primitive values ​​or objects
    const seen = new Set();
    const duplicates = new Set();

    for(let n of arr) {
        if(seen.has(n)) duplicates.add(n);//The static `add()` method of the Atomics object adds a given value to an array element at a given position and returns the previous value that was contained at that position.
        else seen.add(n);
        }
    
        return [...duplicates]
}


console.log(allDuplicates([1,1,2,2,3]))//[1,2]
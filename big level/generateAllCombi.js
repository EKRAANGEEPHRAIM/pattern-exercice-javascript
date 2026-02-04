
// Generate all combinations


function combinations(arr){
    const result = [];

    function backtrack(start, path){
        
// we add the current combination
        result.push([...path]);

        for(let i = start; i < arr.length; i++){
            path.push(arr[i]);          // choose
            backtrack(i + 1, path);     // explore
            path.pop();                 // un-choose
        }
    }

    backtrack(0, []);
    return result;
}

console.log(combinations([1,2,3]));

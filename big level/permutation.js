// Permutation


function permutations(arr){
    const result = [];


    function backtrack(path,used){
        if(path.length === arr.length){
            result.push([...path]);
            return;
        }

        for(let i = 0 ; i < arr.length ; i++){
            if(used[i]) continue;

            used[i] = true;

            path.push(arr[i]);
            backtrack(path,used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([],[]);

    return result;
}


console.log(permutations([1,2,3]))
/**
 * [
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
 */

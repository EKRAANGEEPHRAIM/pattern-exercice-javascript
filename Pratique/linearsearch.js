//linear search

function linearSearch(arr, target){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === target) return i ;
    }

    return -1;
}

//O(n)


console.log(linearSearch([1,2,3], 2)) // 1
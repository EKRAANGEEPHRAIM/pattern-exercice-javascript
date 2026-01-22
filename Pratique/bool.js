//find the target sum

function hasPairWithSum(arr,sum){
    const set = new Set();

    for(let n of arr){
        if(set.has(sum - n)) return true;
        set.add(n);
    }

    return false;
}
//O(n)


console.log(hasPairWithSum([1,2,3,4],4))//true

console.log(hasPairWithSum([1,2,3,4],20))//false
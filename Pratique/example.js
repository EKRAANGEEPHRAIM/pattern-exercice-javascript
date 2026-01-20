const e = require("express");

function example(arr){
    let seen = new Set()

    for(let i = 0 ; i < arr.length ; i++){
        
         if(seen.has(arr[i])) return true;

         seen.add(arr[i])
    }
    return false;
}

console.log(example([1,2,3,4,4]))

//


function anagram(a , b){
    if(a.length !== b.length) return false;

    const count = {}

    for(let char of a){
        count[char]= (count[char] || 0) + 1; //count the letters of first word
    }

    for(let char of b){
        if(!count[char]) return false;
        count[char]--;//Décompter avec le second mot
    }
    return true;
}

//ffind an element

function twoSum(nums, target){
const seen = {};

for(let i = 0 ; i < nums.length ; i++){
    const need = target - nums[i];

    if(seen[need] !== undefined){
        return [seen[need], i]
    }
    
}

seen[nums[i]]= i;
}
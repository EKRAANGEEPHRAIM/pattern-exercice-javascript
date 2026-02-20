function twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        if (seen.has(need)) {
            return [seen.get(need), i];
        }

        seen.set(nums[i], i);
    }
}


 console.log(twoSum([1,2,3,4,5,6,7,8,9], 4)) //[0,2] 1 + 3 = 4
 console.log(twoSum([1,2,3,4,5,6,7,8,9], 7)) // [ 2, 3 ] 3 + 4 = 7



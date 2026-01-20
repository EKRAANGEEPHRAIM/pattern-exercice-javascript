function maxSubArray(nums){
    let max = nums[0], current = nums[0];

    for(let i = 1 ; i < nums.length ; i++){
        current = Math.max(nums[i], current + nums[i]);

        max = Math.max(max , current)
    }

    return max;
}
//o(n)
console.log(maxSubArray([1,2,3,5,6,7,8,9]))// 41
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6

/**
 * Given an array of nums and an integer k, return the maximum of each window of size k that slides from left to right. Solve it in O(n) using a double-ended queue (Deque).
 */


/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */


function maxSlidingWindow(nums, k) {
  const result = [], deque = []; // indices, descending
  for (let i = 0; i < nums.length; i++) {
    // 1. Delete the window index
    if (deque[0] < i - k + 1) deque.shift();
   // 2. Remove candidates smaller than nums[i]
    while (deque.length && nums[deque.at(-1)] <= nums[i])
      deque.pop();
    deque.push(i);
    // 3. The window is full → the max is at the top
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}
// Deque = Queue + Stack combined: we remove from both sides
// The head is always the index of the maximum of the current window


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))//[ 3, 3, 5, 5, 6, 7 ]
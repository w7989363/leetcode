// 75 sort medium

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let front = -1, end = nums.length, cur = 0
  while (cur < end) {
    if (nums[cur] === 0) {
      nums[cur++] = nums[++front]
      nums[front] = 0
    } else if (nums[cur] === 2) {
      nums[cur] = nums[--end]
      nums[end] = 2
    } else {
      cur++
    }
    console.log(nums)
  }
  return nums
}

console.log(sortColors([2,0,2,1,1,0]))
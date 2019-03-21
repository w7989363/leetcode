// 376 medium greedy

// 在单增连续子序列中取最大的，丢弃前面小的
// 在单减连续子序列中取最小的，丢弃前面大的
// 因为要判断出先增还是先减，所以要把开头相等的去掉

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length < 2) return nums.length
  let i = 1, count = 1
  while (i < nums.length && nums[i] === nums[i-1]) {
    i++
  }
  while (i < nums.length) {
    count++
    if (nums[i] > nums[i-1]) {
      i++
      while (i < nums.length && nums[i] >= nums[i-1]) {
        i++
      }
    } else {
      i++
      while (i < nums.length && nums[i] <= nums[i-1]) {
        i++
      }
    }
  }
  return count
}

console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]))


// 15 Array medium

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const ret = []
  for (let i = 0; i < nums.length; i++) {
    // 找到第一个与左边不同的数字
    while (nums[i] === nums[i-1]) i++
    if (nums[i] > 0) break
    // 从右边的数组中寻找
    let left = i+1, right = nums.length-1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        ret.push([nums[i], nums[left], nums[right]])
      }
      if (sum < 0) {
        // 如果和偏小，则左指针++，一直到第一个与左边不同的数字
        do {
          left++
        } while (nums[left] === nums[left-1])
      } else {
        do {
          right--
        } while (nums[right] === nums[right+1])
      }
    }
  }
  return ret
}

console.log(threeSum([0,0, 0]))
console.log(threeSum([-2,1, 1]))
console.log(threeSum([-1,0,1,0]))
console.log(threeSum([-4,-1,-1,0,1,2]))
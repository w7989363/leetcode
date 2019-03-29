// 16 Array medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return 0
  nums.sort((a,b) => a-b)
  let ret = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i+1, right = nums.length-1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === target) return target
      if (Math.abs(target-sum) < Math.abs(target-ret)) {
        ret = sum
      }
      if (sum < target) left++
      else right--
    }
  }
  return ret
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
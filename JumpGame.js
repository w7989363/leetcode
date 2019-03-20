// 55 medium greedy

// 从后往前遍历
// 找到直接能跳到最后的点，然后再把这些点中最左边的那个点当做终点继续往前找
// 直到头

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length < 2) return true
  let i = nums.length-1, j = i - 1
  while (true) {
    // 尽量向左移动指针 i
    while (j + nums[j] >= i) {
      if (j === 0) return true
      else j--
    }
    i = j + 1
    while (j + nums[j] < i) {
      if (j === 0) return false
      else j--
    }
  }
}
console.log(canJump([2,0,0]))
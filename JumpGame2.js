// 45 medium greedy

// 从头往后遍历
// 找到一次能跳到的点，再遍历这些点，找到两次能跳到的点...
// 直到最后


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) return 0
  let jump = 1, right = 0, nextRight = 0
  nums.some((v, i) => {
    if (right >= nums.length - 1) return true
    nextRight = Math.max(i + v, nextRight)
    if (i === right) {
      right = nextRight
      jump++
    }
  })
  return jump
}   

console.log(jump([2,3,1,1,4]))
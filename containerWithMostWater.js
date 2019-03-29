// 11 greedy medium

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length-1
  let ret = 0
  while (left < right) {
    const sum = (right-left) * Math.min(height[left], height[right])
    if (sum > ret) ret = sum
    if (height[left] > height[right]) right--
    else left++
  }
  return ret
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,2,4,3]))
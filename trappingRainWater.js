/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let startHeight = height[0]
  let stack = []
  let res = 0
  for (let i = 1; i < height.length; i++) {
    if (height[i] < startHeight) {
      stack.push(height[i])
    } else {
      stack.forEach(item => res += startHeight-item)
      stack = []
      startHeight = height[i]
    }
  }
  startHeight = height[height.length-1]
  stack = []
  for (let i = height.length-2; i >= 0; i--) {
    if (height[i] <= startHeight) {
      stack.push(height[i])
    } else {
      stack.forEach(item => res += startHeight-item)
      stack = []
      startHeight = height[i]
    }
  }
  return res
}

console.log(trap([2,0,2]))
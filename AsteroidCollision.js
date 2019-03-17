// 735 stack medium

// 需要遍历，并且会在遍历中形成一组一组的情况适合用栈

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let stack = []
  for (let i = 0; i < asteroids.length; i++) {
    console.log('dangqian ', asteroids[i])
    // 往右走，直接入栈
    if (asteroids[i] > 0) {
      stack.push(asteroids[i])
      console.log('right ', stack)
    }
    // 往左走
    else {
      // 将栈顶小于当前值的行星出栈，直到栈空或栈顶大于等于当前值
      while (stack.length !== 0 && stack[stack.length-1] > 0 && stack[stack.length-1] < Math.abs(asteroids[i])) {
        stack.pop()
        console.log('left pop', stack)
      }
      if (stack.length === 0 || stack[stack.length-1] < 0) {
        stack.push(asteroids[i])
        console.log('push ', stack)
      } else if (stack[stack.length-1] === Math.abs(asteroids[i])) {
        stack.pop()
        console.log('bomb ', stack)
      }
    }
  }
  return stack
}

console.log(asteroidCollision([-2,-1,1,2]))
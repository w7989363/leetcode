// 136 bitmap easy

// solution1：用 map
// solution2：数学方法   [a,a,b,b,c]    2*Math.sum(new Set(nums))-Math.sum(nums)
// solution3：位运算
  // 0 ^ a === 0   a ^ a === 0   亦或有交换律结合律
  // 所以 a ^ b ^ a === a ^ a ^ b === b

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ret = 0
  nums.forEach(num => ret = ret ^ num)
  return ret
}
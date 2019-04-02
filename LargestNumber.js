// 179 hard sort

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  return nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('').replace(/^0+$/, '0')
}


console.log(largestNumber([3,30,34,5,9]))

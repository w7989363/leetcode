// 78 bitmap medium

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ret = []
  const count = Math.pow(2, nums.length)
  for (let i = 0; i < count; i++) {
    let temp = []
    for (let j = 0; j < nums.length; j++) {
      if ((i >> j) & 1) temp.push(nums[j])
    }
    ret.push(temp)
  }
  return ret
}

console.log(subsets([1,2,3]))
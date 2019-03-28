// 164 hard sort

// radix sort 基数排序
// https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0
  // 32位有符号整数范围 -2147483648 ~ 2147483647 共 10 位
  const max = ~(1<<31)
  // R 基数
  const R = 10
  let divider = 1
  while (divider < max) {
    let count = Array.from({length:R}).map(n => 0)
    // 计算每一组的元素个数
    nums.forEach(num => {
      count[Math.floor(num / divider) % R]++
    })
    // 计算每一组的后边界index
    for (let i = 1; i < R; i++) {
      count[i] += count[i-1]
    }
    // let temp = Array.from({length:nums.length})
    let temp = new Array(nums.length)
    for (let i = nums.length - 1; i >=0; i--) {
      let num = nums[i]
      temp[--count[Math.floor(num / divider) % R]] = num
    }
    nums = temp
    divider *= R
  }
  let ret = 0
  for (let i = 1; i < nums.length; i++) {
    ret = Math.max(ret, nums[i]-nums[i-1])
  }
  return ret
}

console.log(maximumGap([1231231,5645646,43641,2,3]))
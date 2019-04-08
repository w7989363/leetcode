// 90 bitmap medium

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort()
  let ret = {}
  const count = Math.pow(2, nums.length)
  for (let i = 0; i < count; i++) {
    let temp = []
    for (let j = 0; j < nums.length; j++) {
      if ((i >> j) & 1) temp.push(nums[j])
    }
    ret[temp.join('')] = temp
  }
  return Object.keys(ret).map(k => ret[k])
}

// solution 2
// 先排序，然后递归查找以 begin 开头的不重复子集
// 递归函数先将当前组成的数组作为解加入 ret
// 然后从 begin 开始遍历
// 将每一个 distinct 值加入 cur，然后递归调用 begin+1，递归完再 pop() 出来继续遍历
var subsetsWithDup = function(nums) {
  nums.sort()
  let ret = [], cur = []
  findSubsetsWithBegin(0)
  return ret

  function findSubsetsWithBegin(begin) {
    ret.push(cur.slice())
    for (let i = begin; i < nums.length; i++) {
      if (i === begin || nums[i] !== nums[i-1]) {
        cur.push(nums[i])
        findSubsetsWithBegin(i+1)
        cur.pop()
      }
    }
  }
}

console.log(subsetsWithDup([1,2,2]))
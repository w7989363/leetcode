// 239 heap hard

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // deque 中保存当前滑动窗口中有可能成为最大元素的数字
  let deque = []
  let res = []
  for (let i = 0; i < nums.length; i++) {
    // 每往后移一个单位， deque 中比新加的数字小的元素都没有可能成为最大元素，因为后面加入的肯定比他们之后才离开
    // 所以把 deque 中比新加入的元素小的数都 pop 出来
    while(deque.length && deque[deque.length-1] < nums[i]) {
      deque.pop()
    }
    // 新元素加入队列
    deque.push(nums[i])
    // 滑动窗口开始的 index
    const startIndex = i-k+1
    // 如果滑动窗口还没完全覆盖 k 个，继续往后遍历
    if (startIndex < 0) continue
    // 此时 deque 是降序排列的，第一个元素就是当前滑动窗口的最大值
    res.push(deque[0])
    // 当滑动窗口开始位置的元素是 deque 的头一个元素时，再往后移动滑动窗口就需要将其移出 deque 了
    if (nums[startIndex] === deque[0]) deque.shift()
  }
  return res
}
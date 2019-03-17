// 215 divide and conquer medium

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// 借用快排的思想
// 把第一个元素作为 pivot，从 pivot 后面的数组开始，两个头尾指针，开始死循环
// 头指针一直找比 pivot 大的，尾指针找比 pivot 小的
// 找到之后如果 头指针还在尾指针左边 交换，否则，退出循环。此时尾指针及其前面的都比 pivot 小
// 如果尾指针的 index 大于 k，则在数组开头到尾指针的数组中递归；如果 index 小于 k，则在尾指针开头到数组尾递归
// 如果等于 k 就找到了

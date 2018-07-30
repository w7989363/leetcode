// 287 cycle detection medium

// O(n)

// Floyd's cycle detection思想
// 设两个指针slow和fast，slow每次前移一步，fast前移两步
// 如果链表中存在环（两个不同节点的next指向同一个节点），则slow和fast一定会在环中B点相遇
// 设环的起始点为A，链表起点S
// 然后固定一个指针在B，另一个到S，同时向前一步一步移动，则会在A点相遇

// 因为数组中存的是n+1个1到n之间的数
// 所以可以把数组存储的数值看成链表的next值，形成一个链表
// 数组中的重复值就是链表中循环开始的节点（多个next指向同一个）

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0],
        fast = nums[nums[0]];
    // 寻找B点
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    // 从S开始步移，寻找A点
    fast = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

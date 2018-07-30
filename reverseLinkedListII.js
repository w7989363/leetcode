// 92 linked list medium

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (head === null || head.next === null || n === m) return head;
    let ret = new ListNode(0);
    ret.next = head;
    let it = ret;
    for (let i = 0; i < m - 1; i++) {
        it = it.next;
    }
    let before = it;
    let start = it.next;
    it = it.next;
    let after = it.next;
    for (let i = m; i < n; i++) {
        let temp = after.next;
        after.next = it;
        it = after;
        after = temp;
    }
    start.next = after;
    before.next = it;
    return ret.next;

    // 另一种解法
    // 遍历一遍存到数组中，m到n之间拆出来reverse，再组成一个数组
    // 再遍历一遍 连接
};

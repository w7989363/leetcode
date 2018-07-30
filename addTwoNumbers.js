// 2 Linked List medium
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let it = head;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        let node = new ListNode((a + b + carry) % 10);
        it.next = node;
        it = it.next;
        carry = Math.floor((a + b + carry) / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head.next;
};

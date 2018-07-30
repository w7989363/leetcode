// 24 linked list medium
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let ret = new ListNode(0);
    let before = ret;
    before.next = head;
    let first = head;
    while (first !== null && first.next !== null) {
        let second = first.next;
        let after = second.next;

        before.next = second;
        second.next = first;
        first.next = after;

        before = first;
        first = after;
    }
    return ret.next;
};

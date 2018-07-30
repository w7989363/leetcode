// 81 linked list medium

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
var deleteDuplicates = function(head) {
    if (!head) return head;
    let ret = new ListNode(undefined);
    ret.next = head;
    let before = ret;
    let dup = 0;
    while (head.next !== null) {
        if (head.val === head.next.val) {
            dup = 1;
            head = head.next;
        } else {
            if (dup) {
                before.next = head.next;
            } else {
                before = head;
            }
            dup = 0;
            head = head.next;
        }
    }
    if (dup) before.next = null;
    return ret.next;
};

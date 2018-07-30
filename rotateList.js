// 61 linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || k === 0) return head;
    let arr = [];
    let count = 0;
    while (head !== null) {
        arr[count++] = head;
        head = head.next;
    }
    k = k % count;
    if (k === 0) return arr[0];
    arr[count - 1].next = arr[0];
    arr[count - k - 1].next = null;
    return arr[count - k];
};

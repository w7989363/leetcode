// 19 Linked List medium

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let ret = head;
    let arr = [];
    let count = 0;
    while (head !== null) {
        arr[count++] = head;
        head = head.next;
    }
    // 删除头结点的情况
    if (count === n) return ret.next;
    arr[count - n - 1].next = arr[count - n].next;
    return ret;
};

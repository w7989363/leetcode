// 147 medium sort

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
var insertionSortList = function(head) {
  let h = new ListNode()
  let cur = head
  while (cur !== null) {
    let it = h
    while (it.next && it.next.val < cur.val) {
      it = it.next
    }
    let temp = cur
    cur = cur.next
    temp.next = it.next
    it.next = temp
  }
  return h.next
}
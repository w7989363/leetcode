// 148 medium sort

// 归并排序

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
var sortList = function(head) {
  if (head === null || head.next === null) return head
  let slow = head, fast = head.next
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let head2 = slow.next
  slow.next = null
  let h1 = sortList(head)
  let h2 = sortList(head2)
  return merge(h1, h2)
}

function merge(h1, h2) {
  let head = new ListNode()
  let p = head
  while (h1 !== null && h2 !== null) {
    if (h1.val < h2.val) {
      p.next = h1
      h1 = h1.next
    } else {
      p.next = h2
      h2 = h2.next
    }
    p = p.next
  }
  p.next = h1 === null ? h2 : h1
  return head.next
}
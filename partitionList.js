// 86 linked list medium

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null || head.next === null) return head;
    let ret = new ListNode(undefined);
    ret.next = head;
    let before = (head.val < x) ? head : ret;
    let beforeCur = head;
    let cur = head.next;
    while (cur !== null) {
        if (cur.val < x) {
            if (beforeCur === before) {
                beforeCur = cur;
                before = cur;
                cur = cur.next;
                continue;
            }
            let afterCur = cur.next;
            beforeCur.next = afterCur;
            cur.next = before.next;
            before.next = cur;
            before = cur;
            cur = afterCur;
        } else {
            beforeCur = cur;
            cur = cur.next;
        }
    }
    return ret.next;
};

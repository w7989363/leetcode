// 99 BSTtree medium

// 利用 O(1) 的空间遍历一棵树 morris traversal
// http://www.cnblogs.com/AnnieKim/archive/2013/06/15/morristraversal.html

// 按照中序遍历，正确的应该是升序输出，所以在中序遍历下，输出的地方改为判断与前面输出的点的大小，并记录错误，最后交换值
// 注意，相邻的点交换只会有一处错误，不相邻的点交换有两处错误

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let wrong1 = wrong2 = preNode = null
  let pre = null, cur = root
  while (cur !== null) {
    if (cur.left === null) {
      console.log(cur.val)
      if (preNode !== null && preNode.val > cur.val) {
        if (wrong1 === null){
          wrong1 = preNode
          wrong2 = cur
        } else {
          wrong2 = cur
        }
      }
      preNode = cur
      cur = cur.right
    } else {
      pre = cur.left
      while (pre.right !== null && pre.right !== cur) pre = pre.right
      if (pre.right === null) {
        pre.right = cur
        cur = cur.left
      } else {
        // 这时 pre.right === cur
        console.log(cur.val)
        if (preNode !== null && preNode.val > cur.val) {
          if (wrong1 === null){
            wrong1 = preNode
            wrong2 = cur
          } else {
            wrong2 = cur
          }
        }
        preNode = cur
        pre.right = null
        cur = cur.right
      }
    }
  }
  if (wrong1 !== null && wrong2 !== null) {
    const temp = wrong1.val
    wrong1.val = wrong2.val
    wrong2.val = temp
  }
  return
}




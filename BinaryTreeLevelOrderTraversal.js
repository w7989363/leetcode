// 102 tree medium

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  let queue = [root]
  let ret = []
  while (queue.length) {
    let tempQ = queue
    queue = []
    let arr = []
    while (tempQ.length) {
      const node = tempQ.shift()
      node.left !== null && queue.push(node.left)
      node.right !== null && queue.push(node.right)
      arr.push(node.val)
    }
    ret.push(arr)
  }
  return ret
}


// 113 dfs medium

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

var pathSum = function(root, sum) {
  const ret = []
  let result = []
  if (!root) return ret
  dfs(root, sum)
  return ret

  function dfs(root, sum) {
    if (root.left === null && root.right === null) {
      if (root.val === sum) {
        result.push(root.val)
        ret.push([...result])
        result.pop()
      }
      return
    }
    result.push(root.val)
    if (root.left !== null) dfs(root.left, sum-root.val)
    if (root.right !== null) dfs(root.right, sum-root.val)
    result.pop()
  }
}


// 101 tree easy

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true
  return solve(root.left, root.right)
  
  function solve(left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val !== right.val) return false
    return solve(left.left, right.right) && solve(left.right, right.left)
  }
}
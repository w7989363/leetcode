// 112 easy depth-first search

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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false
  if (root.left === null && root.right === null) return sum === root.val
  if (root.left !== null && hasPathSum(root.left, sum-root.val)) return true
  if (root.right !== null && hasPathSum(root.right, sum-root.val)) return true
  return false
}


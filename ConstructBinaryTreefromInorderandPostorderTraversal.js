// 106 tree medium

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null
  const val = postorder[postorder.length-1]
  const node = new TreeNode(val)
  const idx = inorder.indexOf(val)
  node.left = buildTree(inorder.slice(0,idx), postorder.slice(0,idx))
  node.right = buildTree(inorder.slice(1+idx), postorder.slice(idx, postorder.length-1))
  return node
}
// 337 dp medium

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  // 计算以 root 这个节点为根的树，root.val include 和 exclude 两种情况下分别的最大值
  function conquerNode(root) {
    if (root.left === null && root.right === null) {
      return { include: +root.val, exclude: 0 }
    }
    const left = root.left === null ? { include: 0, exclude: 0 } : conquerNode(root.left)
    const right = root.right === null ? { include: 0, exclude: 0 } : conquerNode(root.right)
    return {
      include: left.exclude + right.exclude + root.val,
      exclude: Math.max(left.include, left.exclude) + Math.max(right.include, right.exclude)
    }
  }
  if (!root) return 0
  const res = conquerNode(root)
  return Math.max(res.include, res.exclude)
}
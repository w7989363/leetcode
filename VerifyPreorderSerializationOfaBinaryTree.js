// 331 binaryTree/Stack medium

// 一
// 一个有向图(将二叉树看成自上而下的有向图)的出度(设为正值)和入读(设为负值)总和是 0
// 非空节点(根节点除外)一个入度两个出度，合起来提供一个出度(+1)；空节点只提供一个入度(-1)
// 先序遍历时，先遍历根节点，只提供两个出度(+2)，然后向下遍历，最后遍历的一定是个空节点(-1)
// 当遍历到最后的空节点时，出入度的和减为0，此时这个棵树完成，如果后面还提供节点，则不正确

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let pOrder = preorder.split(',')
  if (pOrder[0] === '#') return pOrder.length === 1
  let diff = 2
  for (var i = 1; i < pOrder.length; i++) {
    diff = pOrder[i] === '#' ? diff - 1 : diff + 1
    if (diff === 0) break
  }
  if (diff) return false
  return i === pOrder.length-1
};


// 二
// 使用栈
// 数字直接入栈，一个#直接入栈
// 如果连续两个#说明到了叶子节点，把栈顶#和数字出栈(如果在出栈第一个#之后栈为空(即没有父数字节点)，则返回false)
// 如果栈顶还是# 则继续循环出栈#和数字，直到栈为空 或者 栈顶不是#，此时说明遍历完一棵子树，所以#入栈来代替这棵子树


var isValidSerialization = function(preorder) {
  let pOrder = preorder.split(',')
  let stack = []
  for (var i = 0; i < pOrder.length; i++) {
    if (pOrder[i] !== '#') {
      stack.push(pOrder[i])
      continue
    }
    while (stack.length !== 0 && stack[stack.length-1] === '#') {
      stack.pop()
      if (stack.length === 0) return false
      stack.pop()
    }
    stack.push('#')
  }
  return stack.length === 1 && stack[0] === '#'
};

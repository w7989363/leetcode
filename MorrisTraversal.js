// 利用 O(1) 的空间遍历一棵树 morris traversal
// http://www.cnblogs.com/AnnieKim/archive/2013/06/15/morristraversal.html


// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/* 
1. 如果当前节点的左孩子为空，则输出当前节点并将其右孩子作为当前节点。
2. 如果当前节点的左孩子不为空，在当前节点的左子树中找到当前节点在中序遍历下的前驱节点。
  a. 如果前驱节点的右孩子为空，将它的右孩子设置为当前节点。当前节点更新为当前节点的左孩子。
  b. 如果前驱节点的右孩子为当前节点，将它的右孩子重新设为空（恢复树的形状）。输出当前节点。当前节点更新为当前节点的右孩子。
3. 重复以上1、2直到当前节点为空。 
*/
function inorder(root) {
  let pre = null, cur = root
  while (cur !== null) {
    if (cur.left === null) {
      console.log(cur.val)
      cur = cur.right
    } else {
      pre = cur.left
      while (pre.right !== null && pre.right !== cur) pre = pre.right
      if (pre.right === null) {
        pre.right = cur
        cur = cur.left
      } else {
        // 这时 pre.right === cur，代表从中序遍历的前序节点回来了，第二次经过 cur
        console.log(cur.val)
        pre.right = null
        cur = cur.right
      }
    }
  }
}

// 先序遍历代码基本相同，只是改变了输出 cur 节点的时机
// 当前节点左子树为空的时候输出当前节点
// 当前节点左子树不为空的时候，都往下找其中序遍历的前序节点(即左子树最右边的叶子)
  // 中序遍历是回溯到当前节点时才输出当前节点(因为要先输出中序遍历的前序节点)，然后改变先序节点右儿子的结构
  // 而先序遍历是第一次到当前节点(pre.right === null)就输出，回溯回来(pre.right === cur)只是改变先序节点右儿子的结构
function preorder(root) {
  let pre = null, cur = root
  while (cur !== null) {
    if (cur.left === null) {
      console.log(cur.val)
      cur = cur.right
    } else {
      pre = cur.left
      while (pre.right !== null && pre.right !== cur) pre = pre.right
      if (pre.right === null) {
        console.log(cur.val)
        pre.right = cur
        cur = cur.left
      } else {
        // 这时 pre.right === cur，代表从中序遍历的前序节点回来了，第二次经过 cur
        pre.right = null
        cur = cur.right
      }
    }
  }
}


// 后序遍历其实就是从树的左下角一斜行一斜行的输出，并且每一斜行都是从右下角输出到左上角
// 整个过程与先序遍历基本相同，只不过唯一做输出的地方就是回溯到当前节点时，从先序节点往左上角一直输出到当前节点的左儿子
// 需要先建立一个临时节点 dump，令其左儿子为 root，右儿子为 null。这样利于输出最后一斜行
// 另外还需要一个函数，用来倒序输出一个节点到其最右下角儿子，并且只占用 O(1) 空间。
// 需要这个函数是因为，后序遍历完当前节点左子树的最后过程，总是从其中序遍历的前序节点往左上角依次输出到其左儿子

/* 
当前节点设置为 dump
1. 如果当前节点左儿子为空，当前节点赋值为右儿子
2. 而如果当前节点左儿子不为空，则找到中序遍历下当前节点的前序节点
  a. 如果前序节点的右儿子为空，则设置前序节点的右儿子为当前节点，当前节点赋值为左儿子
  b. 如果前序节点的右儿子为当前节点，将其右儿子设为 null，调用上述倒序输出的函数，倒序输出当前节点的左儿子到前序节点，当前节点赋值为右儿子
3. 重复 1 2 直到当前节点为空
 */
function reverse(from, to) {
  if (from === to) return
  let head = from, nextHead = head.right, temp
  // 先把 to.right 给 from.right，否则会丢失
  head.right = to.right
  while (head !== to) {
    temp = nextHead.right
    nextHead.right = head
    head = nextHead
    nextHead = temp
  }
}

function printReverse(from, to) {
  reverse(from, to)
  let p = to
  while (true) {
    console.log(p.val)
    if (p === from) break
    p = p.right
  }
  reverse(to, from)
}

function postorder(root) {
  const dump = new TreeNode()
  dump.left = root
  let cur = dump, pre = null
  while (cur !== null) {
    if (cur.left === null) {
      cur = cur.right
    } else {
      pre = cur.left
      while (pre.right !== null && pre.right !== cur) pre = pre.right
      if (pre.right === null) {
        pre.right = cur
        cur = cur.left
      } else {
        // 这时 pre.right === cur，代表从中序遍历的前序节点回来了，第二次经过 cur
        printReverse(cur.left, pre)
        pre.right = null
        cur = cur.right
      }
    }
  }
}
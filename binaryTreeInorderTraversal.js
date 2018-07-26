// 94 Stack medium
class Stack {
    constructor() {
        this.data = [];
        // 栈顶位置，指向空
        this.sp = 0;
    }
    push(element) {
        this.data[this.sp++] = element;
    }
    pop() {
        return this.data[--this.sp];
    }
    top() {
        return this.data[this.sp - 1];
    }
    clear() {
        this.data = [];
        this.sp = 0;
    }
    length() {
        return this.sp;
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ret = [];
    if (root == null) return ret;
    let index = 0;
    let s = new Stack();
    s.push(root);
    while (s.length() != 0) {
        let cur = s.pop();
        if (cur.left != null) {
            s.push(cur);
            s.push(cur.left);
            cur.left = null;
        } else {
            ret[index++] = cur.val;
            if (cur.right != null) {
                s.push(cur.right);
                cur.right = null;
            }
        }
    }
    return ret;
};

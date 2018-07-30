// 22 backtracking medium

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ret = [];
    let dfs = function(str, left, right) {
        if (str.length === n * 2) ret.push(str);
        if (left < n) dfs(str + '(', left + 1, right);
        if (right < left) dfs(str + ')', left, right + 1);
    }
    dfs('', 0, 0);
    return ret;
};



console.log(generateParenthesis(3));

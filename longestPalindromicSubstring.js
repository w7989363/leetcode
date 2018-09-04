// 5 dp medium

// dp[i][j]表示s[i]到s[j]是否是回文
// 基础dp[i][i] = true; dp[i][i+1] = (s[i] === s[i+1]);
// 即二维数组的斜对角线以及往上一层

// 递推dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
// 递推根据的是当前位置左下角的值
// 因此要斜着一层一层往上推 直到右上角顶点

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    if (len === 0) return '';
    let dp = [];
    for (let i = 0; i < len; i++) {
        dp[i] = [];
        for (let j = 0; j < len; j++) {
            dp[i][j] = true;
        }
    }
    let ret = s[0];
    for (let i = 0; i < len - 1; i++) {
        dp[i][i + 1] = (s[i] === s[i + 1]);
        if (dp[i][i + 1]) ret = s.slice(i, i + 2);
    }
    for (let k = 2; k < len; k++) {
        for (let i = 0, j = k; j < len; i++, j++) {
            dp[i][j] = (dp[i + 1][j - 1] && s[i] === s[j]);
            if (dp[i][j] && j - i + 1 > ret.length) {
                ret = s.slice(i, j + 1);
            }
        }

    }
    return ret;
};

console.log(longestPalindrome('babab'));

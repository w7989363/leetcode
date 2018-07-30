// 647 dp medium

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length;
    if (len === 0) return 0;
    let dp = [];
    for (let i = 0; i < len; i++) {
        dp[i] = [];
        for (let j = 0; j < len; j++) {
            dp[i][j] = true;
        }
    }

    let ret = len;
    for (let i = 0; i < len - 1; i++) {
        dp[i][i + 1] = (s[i] === s[i + 1]);
        if (dp[i][i + 1]) ret++;
    }

    for (let k = 2; k < len; k++) {
        for (let i = 0, j = k; j < len; i++, j++) {
            dp[i][j] = (dp[i + 1][j - 1] && s[i] === s[j]);
            if (dp[i][j]) ret++;
        }

    }
    return ret;
};

console.log(countSubstrings('aaa'));

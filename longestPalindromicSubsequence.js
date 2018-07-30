// 516 dp medium

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let len = s.length;
    if (len === 0) return 0;
    let dp = [];
    for (let i = 0; i < len; i++) {
        dp[i] = [];
        for (let j = 0; j < len; j++) {
            dp[i][j] = 1;
        }
    }

    let max = 1;
    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = 2;
            max = 2;
        }
    }

    for (let k = 2; k < len; k++) {
        for (let i = 0, j = k; j < len; i++, j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
                max = Math.max(max, dp[i][j]);
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }

    }
    return max;
};


console.log(longestPalindromeSubseq('bbbab'));

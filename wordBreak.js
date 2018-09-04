// 139 dp medium

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = [true];
    let slen = s.length;
    let wlen = wordDict.length;
    for (let i = 1; i <= slen; i++) {
        dp[i] = false;
        for (let j = 0; j < wlen; j++) {
            let str = wordDict[j];
            let len = str.length;
            if (i >= len && dp[i - len] && s.slice(i - len, i) === str) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[slen];
};

console.log(wordBreak("leetcode", ["leet", "code"]));

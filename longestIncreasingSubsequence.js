// 300 dp medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if (len === 0) return 0;
    let max = 1;
    let dp = [1];
    for (let i = 1; i < len; i++) {
        dp[i] = 1;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};

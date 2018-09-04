// 53 dp easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [...nums];
    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i], dp[i - 1] + dp[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
};

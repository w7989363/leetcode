// 221 dp medium

// dp[i][j]表示以i,j为右下角的最大正方形的边长
// 观察dp[i][j-1] dp[i-1][j] dp[i-1][j-1]为右下角的三个正方形
// 取他们的最小值加1就是dp[i][j]的边长

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    let m = matrix.length,
        n = matrix[0].length;
    let max = 0;
    let dp = [
        []
    ];
    for (let i = 0; i < n; i++) {
        dp[0][i] = matrix[0][i] - 0;
        max = Math.max(max, dp[0][i]);
    }
    for (let i = 1; i < m; i++) {
        dp[i] = [];
        dp[i][0] = matrix[i][0] - 0;
        max = Math.max(max, dp[i][0]);
    }
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            if (matrix[row][col] - 0 === 1) {
                dp[row][col] = Math.min(dp[row - 1][col - 1], dp[row - 1][col], dp[row][col - 1]) + 1;
                max = Math.max(max, dp[row][col])
            } else {
                dp[row][col] = 0;
            }
        }
    }
    return max * max;
};

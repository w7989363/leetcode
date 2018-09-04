// 63 dp medium

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    let dp = [];
    obstacleGrid.forEach((arr, i) => {
        dp[i] = [];
        arr.forEach((val, j) => {
            dp[i][j] = val ? 0 : 1;
        });
    });
    let m = dp.length;
    let n = dp[0].length;
    // 初始化第一行第一列
    for (let i = 1; i < m; i++) {
        if (dp[i][0] === 0) continue;
        dp[i][0] = dp[i - 1][0];
    }
    for (let j = 1; j < n; j++) {
        if (dp[0][j] === 0) continue;
        dp[0][j] = dp[0][j - 1];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (dp[i][j] === 0) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
console.log(uniquePathsWithObstacles([
    [0, 0],
    [1, 1],
    [0, 0]
]));

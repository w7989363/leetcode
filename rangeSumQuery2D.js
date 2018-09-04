// 304 dp medium

// dp[i][j]表示以matrix[i][j]为右下角的长方形面积

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return;
    let m = matrix.length,
        n = matrix[0].length;
    this.dp = [new Array(n + 1).fill(0)];
    for (let row = 1; row <= m; row++) {
        this.dp[row] = [0];
        for (let col = 1; col <= n; col++) {
            this.dp[row][col] = this.dp[row - 1][col] + this.dp[row][col - 1] - this.dp[row - 1][col - 1] + matrix[row - 1][col - 1];
        }
    }
    console.log(this.dp);
};
NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
]);
/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row2 + 1][col1] - this.dp[row1][col2 + 1] + this.dp[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

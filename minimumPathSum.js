// 64 dp medium

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0) {
                grid[i][j] = grid[i][j - 1] + grid[i][j];
                continue;
            }
            if (j === 0) {
                grid[i][j] = grid[i - 1][j] + grid[i][j];
                continue;
            }
            grid[i][j] = Math.min(grid[i][j - 1] + grid[i][j], grid[i - 1][j] + grid[i][j]);

        }
    }
    return grid[r - 1][c - 1];
};

console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));

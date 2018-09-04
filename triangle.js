// 120 dp medium

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let row = triangle.length;
    for (let i = 1; i < row; i++) {
        let col = triangle[i].length;
        for (let j = 0; j < col; j++) {
            if (j === 0) triangle[i][j] += triangle[i - 1][j];
            else if (j === col - 1) triangle[i][j] += triangle[i - 1][j - 1];
            else {
                triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
        }
    }
    let min = triangle[row - 1][0];
    for (let j = 0; j < row; j++) {
        min = Math.min(min, triangle[row - 1][j]);
    }
    return min;
};

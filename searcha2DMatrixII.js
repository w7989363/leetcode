// 240 divide and conquer medium

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let m = matrix.length,
        n = matrix[0].length;
    let ret = false;
    let conquer = function(left, top, right, bottom) {
        let midx = (left + right) >> 1;
        let midy = (top + bottom) >> 1;
        if (matrix[midy][midx] === target) {
            ret = true;
            return;
        } else if (matrix[midy][midx] < target) {
            if (midx + 1 <= right) conquer(midx + 1, top, right, midy);
            if (midy + 1 <= bottom) conquer(left, midy + 1, midx, bottom);
            if (midx + 1 <= right && midy + 1 <= bottom) conquer(midx + 1, midy + 1, right, bottom);
        } else {
            if (midx === left && midy === top) return;
            conquer(left, top, midx, midy);
            if (midy + 1 <= bottom) conquer(left, midy + 1, midx, bottom);
            if (midx + 1 <= right) conquer(midx + 1, top, right, midy);
        }
    }
    conquer(0, 0, n - 1, m - 1);
    return ret;
};
console.log(searchMatrix([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
], 5));

// console.log(searchMatrix([[1,1]],2));

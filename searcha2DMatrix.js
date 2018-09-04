// 74 binary search


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if (m === 0) return false;
    let n = matrix[0].length;
    if (n === 0) return false;
    let findRow = function(left, right) {
        if (left === right) return left;
        let mid = (left + right) >> 1;
        if (matrix[mid][0] > target) return findRow(left, mid);
        if (matrix[mid][0] <= target && matrix[mid][n - 1] >= target) return mid;
        if (matrix[mid][n - 1] < target) return findRow(mid + 1, right);
    }
    let row = findRow(0, m - 1);
    let binarySearch = function(left, right) {
        if (left > right) return false;
        let mid = (left + right) >> 1;
        if (matrix[row][mid] === target) return true;
        if (matrix[row][mid] < target) return binarySearch(mid + 1, right);
        return binarySearch(left, mid - 1);
    }
    return binarySearch(0, n - 1);
};

console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
], 3));

// 279 dp math medium


/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let arr = [];
    let row;
    let dp = [];
    for (row = 0;; row++) {
        arr[row] = row * row;
        if (arr[row] > n) break;
    }
    for (let i = 0; i <= n; i++) {
        dp[i] = i;
    }
    for (let i = 2; i < row; i++) {
        for (let j = 1; j <= n; j++) {
            let k = 1;
            while (j - (arr[i] * k) >= 0) {
                dp[j] = Math.min(dp[j], dp[j - (arr[i] * k)] + k);
                k++;
            }
        }
    }
    return dp[n];
};

console.log(numSquares(13));

// 96 dp medium


// 设dp[n]为1~n所构成的BST数量
// F[i,n]为以i为根，1~n所构成的BST数量
// 因此 dp[n] = F[1,n]+F[2,n]+...+F[n,n]
// 如何求F[i,n]呢？
// i为根，1~i-1在左子树，i+1~n在右子树，所以是两边子树数量的乘积
// 那左子树和右子树的数量？左子树显然是dp[i-1]，右子树有n-i个数，所以数量是dp[n-i]
// 于是F[i,n] = dp[i-1] * dp[n-i]
// 所以根据dp[n] = F[1,n]+F[2,n]+...+F[n,n]  可以通过一个循环来求dp[n]


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = [1, 1];

    for (let k = 2; k <= n; k++) {
        // 求dp[k]
        dp[k] = 0;
        for (let i = 1; i <= k; i++) {
            // 求F[i,k] 累加
            dp[k] += dp[i - 1] * dp[k - i];
        }
    }
    return dp[n];
};

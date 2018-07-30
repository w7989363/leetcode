// 264 Math medium

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n === 0) return;
    if (n === 1) return 1;
    let arr = [1];
    let index2 = 0,
        index3 = 0;
    index5 = 0;
    for (var i = 1; i < n; i++) {
        arr[i] = Math.min(arr[index2] * 2, arr[index3] * 3, arr[index5] * 5);
        if (arr[i] === arr[index2] * 2) index2++;
        if (arr[i] === arr[index3] * 3) index3++;
        if (arr[i] === arr[index5] * 5) index5++;
    }
    return arr[i - 1];
};

// 6 string medium

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let len = s.length;

    let t = 2 * numRows - 2;
    let ret = '';
    // 第一行
    for (let i = 0; i < len; i += t) {
        ret += s[i];
    }
    // 2~n-1行
    for (let r = 1; r < numRows - 1; r++) {
        for (let first = r, second = t - r; first < len || second < len; first += t, second += t) {
            if (first < len) ret += s[first];
            if (second < len) ret += s[second];
        }
    }
    // 最后一行
    for (let i = numRows - 1; i < len; i += t) {
        ret += s[i];
    }
    return ret;
};


console.log(convert('PAYPALISHIRING', 4));

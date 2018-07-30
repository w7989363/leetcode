// 8 math medium

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // 去空格
    str = str.trim();
    // 提取可转换部分到str
    const pat = /^[+-]?[0-9]+/;
    const res = pat.exec(str);
    if (res === null) return 0;
    str = res[0];
    // 边界
    if (str - 0 < -2147483648) return -2147483648;
    if (str - 0 > 2147483647) return 2147483647;
    return str - 0;
};

// 166 Hash medium
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let ret = "";
    if (numerator * denominator < 0) {
        ret = "-";
        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);
    }
    let arr = [];
    let m = new Map();
    arr.push(Math.floor(numerator / denominator));
    numerator = (numerator % denominator) * 10;
    if (numerator != 0) arr.push(".");
    while (numerator != 0) {
        if (m.has(numerator)) break;
        let x = Math.floor(numerator / denominator);
        arr.push(x);
        m.set(numerator, arr.length - 1)
        numerator = (numerator % denominator) * 10;
    }
    // 加括号
    if (numerator != 0) {
        let index = m.get(numerator);
        let arr1 = arr.slice(0, index);
        let arr2 = arr.slice(index);
        ret = ret + `${arr1.join("")}(${arr2.join("")})`;
    } else {
        ret = ret + arr.join("");
    }
    return ret;
};

// fractionToDecimal(7,4);

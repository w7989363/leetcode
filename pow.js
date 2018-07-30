// 50 Math medium

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1.00000;
    let negativex = false;
    let negativen = false;
    if (n < 0) {
        negativen = true;
        n = Math.abs(n);
    }
    if (x < 0) {
        negativex = true;
        x = Math.abs(x);
    }
    let bin = n.toString(2);
    let sum = 1;
    let carry = x;
    for (let i = bin.length - 1; i >= 0; i--) {
        if (bin[i] === "1") {
            sum = sum * carry;
        }
        carry = carry * carry;
    }
    let ret = sum;
    if (negativen) {
        ret = 1 / ret;
    }
    if (negativex && n % 2 === 1) {
        ret = -ret;
    }
    return ret;


};
console.log(myPow(2, 10));

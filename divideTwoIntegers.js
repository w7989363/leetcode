// 29 Math medium


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = MAX + 1;
    let positive = true;
    if (dividend < 0) {
        positive = !positive;
        dividend = Math.abs(dividend);
    }
    if (divisor < 0) {
        positive = !positive;
        divisor = Math.abs(divisor);
    }
    let ret = 0;

    if (divisor === 1) {
        ret = dividend;
    } else {
        while (dividend >= divisor) {
            console.log(`${dividend}`);
            let d = divisor;
            let c = 1;
            while (d <= dividend) {
                d = d << 1;
                c = c << 1;
            }
            ret = ret + (c >> 1);
            dividend = dividend - (d >> 1);
        }
    }

    if (positive && ret <= MAX) return ret;
    if (!positive && ret <= MIN) return -ret;
    return MAX;
};
console.log(divide(7, 3));

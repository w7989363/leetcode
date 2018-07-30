// 12 Math medium



/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let arrA = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let arrR = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let count = [];
    count = arrA.map((v) => {
        let ret = Math.floor(num / v);
        num = num % v;
        return ret;
    });
    let ret = '';
    for (let i = 0; i < count.length; i++) {
        if (count[i]) {
            while (count[i]--) {
                ret = ret + arrR[i];
            }

        }
    }
    return ret;
};

console.log(intToRoman(1998));

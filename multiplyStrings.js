// 43 Math medium


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    let arr = [];
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let temp = num1[i] * num2[j];
            arr[i + j] = arr[i + j] ? arr[i + j] + temp : temp;
        }
    }
    let carry = 0;
    for (let i = num1.length + num2.length - 2; i >= 0; i--) {
        arr[i] += carry;
        carry = Math.floor(arr[i] / 10);
        arr[i] = arr[i] % 10;
    }
    if (carry) arr.unshift(carry);
    return arr.join('');

};

console.log(multiply("123456789", "987654321"));

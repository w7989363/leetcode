// 299 Hash medium

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let a = 0,
        b = 0;
    let len = guess.length;
    let m = {};
    // the first pass, store the char from secret in map that not matching guess in the same position
    for (let i = 0; i < len; i++) {
        if (secret[i] === guess[i]) {
            a++;
        } else {
            m[secret[i]] = m[secret[i]] ? m[secret[i]] + 1 : 1;
        }
    }
    // the second pass, check guess, if the number in guess exist in map cow++
    for (let i = 0; i < len; i++) {
        if (secret[i] !== guess[i] && m[guess[i]] > 0) {
            b++;
            m[guess[i]]--;
        }
    }
    return `${a}A${b}B`;
};
console.log(getHint("1123", "0111"));

// 187 Hash medium

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let len = s.length;
    let m = new Map();
    let ret = [];
    for (let i = 0; i + 9 < len; i++) {
        let substr = s.slice(i, i + 10);
        if (!m.has(substr)) {
            m.set(substr, 1);
        } else if (m.get(substr) === 1) {
            ret.push(substr);
            m.set(substr, 2);
        }
    }
    return ret;
};

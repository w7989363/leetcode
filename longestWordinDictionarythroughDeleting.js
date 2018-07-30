// 524 two pointer medium

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let ret = '';
    d.forEach((str) => {
        let len = str.length;
        let index = -1;
        for (let i = 0; i < len; i++) {
            index = s.indexOf(str[i], index + 1);
            if (index === -1) break;
        }
        if (index !== -1) {
            if (len === ret.length) {
                ret = ret < str ? ret : str;
            } else if (len > ret.length) {
                ret = str;
            }
        }
    });
    return ret;
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));

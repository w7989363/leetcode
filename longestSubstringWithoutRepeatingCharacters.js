// 3 two pointers medium

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let start = 0,
        end = 0,
        max = 1;
    for (; end < s.length - 1; end++) {
        let index = s.indexOf(s[end + 1], start);
        if (index < end + 1) start = index + 1;
        max = Math.max(max, end - start + 2);
    }
    return max;
};

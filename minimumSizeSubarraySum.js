// 209 two pointer medium

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let min = nums.length + 1;
    let sum = 0;
    for (let i = 0, j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= s) {
            min = Math.min(min, j - i + 1);
            sum -= nums[i++];
        }
    }
    if (min === nums.length + 1) return 0;
    return min;
};

console.log(minSubArrayLen(3, [1, 1]));

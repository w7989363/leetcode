// 152 dp medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let imin = nums[0],
        imax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0)[imax, imin] = [imin, imax];

        imax = Math.max(nums[i], imax * nums[i]);
        imin = Math.min(nums[i], imin * nums[i]);

        max = Math.max(max, imax);
    }
    return max;
};

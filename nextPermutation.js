// 31 Array medium
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    let len = nums.length;
    while (i >= 0) {
        if (nums[i] < nums[i + 1]) {
            let j = i + 1;
            while (j < len - 1 && nums[i] < nums[j + 1]) {
                j++;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
            break;

        }
        i--;
    }
    // reverse i+1到len-1
    i++;
    j = len - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};

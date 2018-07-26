// 34 Array medium
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length;
    let lo = 0,
        hi = len - 1;
    let mid = Math.floor((lo + hi) / 2);
    let x = -1;
    while (lo <= hi) {
        if (nums[mid] < target) {
            lo = mid + 1;
        } else if (nums[mid] > target) {
            hi = mid - 1;
        } else {
            x = mid;
            break;
        }
        mid = Math.floor((lo + hi) / 2);
    }
    if (x === -1) {
        return [-1, -1];
    } else {
        let left = x,
            right = x;
        while (left - 1 >= 0 && nums[left - 1] === nums[x]) left--;
        while (right + 1 < len && nums[right + 1] === nums[x]) right++;
        return [left, right];
    }
};

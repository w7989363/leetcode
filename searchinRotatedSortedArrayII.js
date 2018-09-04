// 81 binarySearch medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) return true;

        // 有重复的情况[3,1,2,3,3,3,3] 单独处理
        if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};

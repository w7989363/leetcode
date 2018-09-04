// 162 binarySearch medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let len = nums.length;
    if (len === 0) return;
    let left = 0,
        right = len - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        let first = mid === 0 ? nums[mid] - 1 : nums[mid - 1];
        let last = mid === len - 1 ? nums[mid] - 1 : nums[mid + 1];

        if (first < nums[mid] && nums[mid] > last) return mid;
        else if (first < nums[mid] && nums[mid] < last) left = mid + 1;
        else if (first > nums[mid] && nums[mid] > last) right = mid - 1;
        else right = mid - 1;
    }
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

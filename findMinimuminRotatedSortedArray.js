// 153 binarySearch medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) return;
    let left = 0,
        right = nums.length - 1;
    if (nums[left] <= nums[right]) return nums[0];
    // let min = nums[0];
    while (left < right) {
        if (left + 1 === right && nums[left] > nums[right]) return nums[right];
        let mid = (left + right) >> 1;

        if (nums[left] <= nums[mid]) {
            left = mid;
        } else {
            right = mid;
        }
    }
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

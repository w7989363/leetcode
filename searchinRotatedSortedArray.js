// 33 binary search  medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;
    let pivot = findPivot(nums, 0, nums.length - 1);
    if (pivot === -1) return binarySearch(nums, 0, nums.length - 1, target);
    if (target < nums[0]) return binarySearch(nums, pivot + 1, nums.length - 1, target);
    return binarySearch(nums, 0, pivot, target);
};

// 二分查找pivot 没有pivot返回-1
var findPivot = function(nums, left, right) {
    if (left + 1 === right && nums[left] > nums[right]) return left;
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right] && nums[mid] < nums[left]) {
        return findPivot(nums, left, mid);
    } else if (nums[mid] > nums[left] && nums[mid] > nums[right]) {
        return findPivot(nums, mid, right);
    } else {
        return -1;
    }
};

var binarySearch = function(nums, left, right, target) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return binarySearch(nums, left, mid - 1, target);
    } else {
        return binarySearch(nums, mid + 1, right, target);
    }

};

console.log(findPivot([1, 3], 0, 1));
// console.log(search([4,5,6,0,1,2],0));

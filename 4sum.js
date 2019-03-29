// 18 Array medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	nums.sort((a, b) => a - b);
	let ret = [];
	let len = nums.length;
	for (let i = 0; i < len - 3; i++) {
		let target3 = target - nums[i];
		for (let j = i + 1; j < len - 2; j++) {
			let target2 = target3 - nums[j];
			let front = j + 1;
			let end = len - 1;
			while (front < end) {
				let sum = nums[front] + nums[end];
				if (sum < target2) {
					front++;
				} else if (sum > target2) {
					end--;
				} else {
					ret.push([nums[i], nums[j], nums[front], nums[end]]);
					while (front < end && nums[front + 1] === nums[front]) front++;
					front++;

					while (front < end && nums[end - 1] === nums[end]) end--;
					end--;

				}
			}
			while (j + 1 < len && nums[j + 1] === nums[j]) j++;
		}
		while (i + 1 < len && nums[i + 1] === nums[i]) i++;
	}
	return ret;
};
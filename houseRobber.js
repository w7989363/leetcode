// 198 dp easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	let len = nums.length;
	let include = 0, exclude = 0;
	for (let j = 0; j < len; j++) {
		let i = include, e = exclude;
		include = e + nums[j];
		exclude = Math.max(i, e);
	}
	return Math.max(include, exclude);
};
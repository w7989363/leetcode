// 213 dp medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 1) return nums[0];
	let len = nums.length;
	let robFromTo = function (from, to) {
		let include = 0,
			exclude = 0;
		for (let j = from; j <= to; j++) {
			let i = include,
				e = exclude;
			include = e + nums[j];
			exclude = Math.max(i, e);
		}
		return Math.max(include, exclude);
	}

	return Math.max(robFromTo(0, len - 2), robFromTo(1, len - 1));
};
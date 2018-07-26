// 80 Array medium

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = 0;
    let get = 0;
    let len = nums.length;
    while(get<len) {
        nums[set] = nums[get];
        get++;
        while(get<len && nums[get] === nums[set] && nums[set] === nums[set-1]) {
            get++;
        }
        set++;
    }
    return set;
};

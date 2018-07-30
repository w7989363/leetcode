// 347 Hash medium

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {},
        ret = [],
        sortBucket = [];
    nums.forEach((num) => {
        map[num] = map[num] ? map[num] + 1 : 1;
    });
    Object.keys(map).forEach((k, v) => {
        console.log(k + v);
        let frequency = map[k];
        if (sortBucket[frequency] === undefined) {
            sortBucket[frequency] = [k - 0];
        } else {
            sortBucket[frequency].push(k - 0);
        }
    });
    for (let i = sortBucket.length - 1; i >= 0; i--) {
        if (ret.length === k) break;
        if (sortBucket[i] === undefined) continue;
        ret.push(...sortBucket[i]);
    }
    return ret;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

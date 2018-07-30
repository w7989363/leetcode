// 69 Math medium

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let arr = [];
    let numInGroup = 1
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
        numInGroup = numInGroup * (i + 1);
    }
    let ret = [];
    while (n !== 0) {
        numInGroup = numInGroup / n;
        let nthGroup = 0;
        while (nthGroup * numInGroup < k) nthGroup++;
        nthGroup--;
        k = k - (nthGroup * numInGroup);
        ret.push(...arr.splice(nthGroup, 1));
        n--;
    }
    return ret.join('');
};

console.log(getPermutation(4, 9));

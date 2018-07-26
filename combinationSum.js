// 39 Array medium

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    var ret = [];
    csum(candidates, target, 0, [], 0, ret);
    return ret;
};

function csum(candidates, target, from, curArr, curSum, ret) {
    if (curSum === target) {
        ret.push([...curArr]);
    } else if (curSum > target) {
        return;
    } else {
        for (let k = from; k < candidates.length; k++) {
            curArr.push(candidates[k]);
            csum(candidates, target, k, curArr, curSum + candidates[k], ret);
            curArr.pop();
        }
    }
}

// 40 Array medium

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    var ret = [];
    dfs(candidates, target, 0, [], 0, ret);
    return ret;
};
var dfs = function(candidates, target, from, curArr, curSum, ret) {
    let len = candidates.length;
    for (let k = from; k < len; k++){
        console.log(curArr);
        console.log(`准备加${candidates[k]}`);
        let sum = curSum+candidates[k];
        if(sum > target){
            console.log("> return");
            return;
        }else if (sum < target) {
            console.log("< 下层");
            curArr.push(candidates[k]);
            dfs(candidates, target, k+1, curArr, sum, ret);
            curArr.pop();
            console.log("回溯");
        }else{
            console.log("=");
            curArr.push(candidates[k]);
            ret.push([...curArr]);
            curArr.pop();
        }
        while(candidates[k+1] === candidates[k]) k++;
    }
}

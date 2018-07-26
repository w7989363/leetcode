// 49 Hash medium

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let ret = [];
    let len = strs.length;
    let m = new Map();
    for (v of strs) {
        let arr = [...v];
        const str = arr.sort().join("");
        if(m.has(str)){
            m.get(str).push(v);
        }else{
            m.set(str, [v]);
        }
    }
    for([k,v] of m){
        ret.push(v);
    }
    return ret;
};

// groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

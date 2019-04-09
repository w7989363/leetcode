// 201 bitmap medium

// [m, n] 之间的数，前面的二进制位肯定是一样的
// m 和 n 从左边第一个不一样的二进制位及其以后的位都置位0

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  if(m == 0){
    return 0
  }
  let i = 0
  while(m != n){
    m >>= 1
    n >>= 1
    i++
  }
  return n << i
}

var rangeBitwiseAnd = function(m, n) {
  if(m == 0){
    return 0
  }
  let i = 1<<31
  while(i !== 0) {
    if ((i & m) !== (i & n)) {
      i = ~((i << 1) - 1)
      return m & i
    }
    i = i >>> 1
  }
  return m
}

console.log(rangeBitwiseAnd(1,2))
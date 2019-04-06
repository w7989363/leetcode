// 190 bit easy

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  // return parseInt(n.toString(2).split('').reverse().join('').padEnd(32, '0'), 2)
  let res = 0
  for (let i = 0; i < 32; i++) {
    res = res << 1
    res = res | (n & 1)
    n = n >>> 1
  }
  return res >>> 0
}

console.log(reverseBits(4294967293))

// console.log(parseInt('11111111111111111111111111111101',2))
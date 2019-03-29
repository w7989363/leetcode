// 274 sort medium

// 桶排序
// 因为要求的数肯定小于 N，所以只要大小为 N 的桶就好了
// 然后从 N 往前遍历，遇到第一个符合条件的数就是 h

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const N = citations.length
  let bucket = Array.from({length: N+1}).fill(0)
  // let bucket = Array.from({length: N+1}).map(n => 0)
  citations.forEach(n => {
    bucket[Math.min(n, N)]++
  })
  let count = 0
  for (let h = N; h >= 0; h--) {
    count += bucket[h]
    if (count >= h) return h
  }
}

console.log(hIndex([0,1,3,5,6]))
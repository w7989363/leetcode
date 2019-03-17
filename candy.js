// 135 hard

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let arr = [1]
  for (let i = 1; i < ratings.length; i++) {
    arr[i] = 1
    arr[i] = ratings[i] > ratings[i-1] ? arr[i-1] + 1 : arr[i]
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    arr[i] = ratings[i] > ratings[i+1] ? Math.max(arr[i], arr[i+1]+1) : arr[i]
  }
  return arr.reduce((pre,cur) => pre+cur, 0)
}

console.log(candy([1,2,2]))



// 围成圈

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy2 = function(ratings) {
  let arr = [1]
  for (let i = 1; i < ratings.length; i++) {
    arr[i] = 1
    arr[i] = ratings[i] > ratings[i-1] ? arr[i-1] + 1 : arr[i]
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    arr[i] = ratings[i] > ratings[i+1] ? Math.max(arr[i], arr[i+1]+1) : arr[i]
  }
  arr.push(arr.shift())
  for (let i = 1; i < ratings.length; i++) {
    arr[i] = ratings[i] > ratings[i-1] ? arr[i-1] + 1 : arr[i]
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    arr[i] = ratings[i] > ratings[i+1] ? Math.max(arr[i], arr[i+1]+1) : arr[i]
  }
  return arr.reduce((pre,cur) => pre+cur, 0)
}

console.log(candy2([3,4,1,2]))
// 378 medium Heap

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let n = matrix.length
  let pq = new PriorityQueue((a,b) => a.val < b.val)
  pq.offer({
    val: matrix[0][0],
    i: 0,
    j: 0
  })
  while (--k) {
    let obj = pq.poll()
    if (obj.i + 1 < n && matrix[obj.i+1][obj.j] !== undefined) {
      pq.offer({
        val: matrix[obj.i+1][obj.j],
        i: obj.i+1,
        j: obj.j
      })
      matrix[obj.i+1][obj.j] = undefined
    }
    if (obj.j + 1 < n && matrix[obj.i][obj.j+1] !== undefined) {
      pq.offer({
        val: matrix[obj.i][obj.j+1],
        i: obj.i,
        j: obj.j+1
      })
      matrix[obj.i][obj.j+1] = undefined
    }
  }
  return pq.poll().val
}

class PriorityQueue {
  constructor(compare = (a, b) => a < b) {
    this.compare = compare
    this.queue = []
  }
  offer(obj) {
    let start = 0, end = this.queue.length
    while (start < end) {
      let mid = Math.floor((start + end) / 2)
      if(this.compare(this.queue[mid], obj)) {
        start = mid + 1
      }
      else {
        end = mid
      }
    }
    this.queue.splice(start, 0, obj)
  }
  poll() {
    return this.queue.shift()
  }
  peek() {
    return this.queue.length ? this.queue[0] : undefined
  }
  clear() {
    this.queue = []
  }
  isEmpty() {
    return this.queue.length === 0
  }
}

console.log(kthSmallest([[1,3,5],[6,7,12],[11,14,14]], 6))
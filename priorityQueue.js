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
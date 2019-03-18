// 295 binarySearch/Heap hard

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.deque = []
}

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.deque.length === 0) {
    this.deque.push(num)
    return
  }
  const idx = this.searchIndex(num)
  this.deque.splice(idx, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = this.deque.length
  if (len % 2 === 0) {
    return (this.deque[len/2] + this.deque[len/2 - 1])/2
  } else {
    return this.deque[Math.floor(len/2)]
  }
};

/** 
 * @param {number} num
 * @return {number}
 */
MedianFinder.prototype.searchIndex = function(num) {
  let start = 0, end = this.deque.length
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (this.deque[mid] === num) {
      return mid
    }
    else if (this.deque[mid] < num) {
      start = mid + 1
    }
    else {
      end = mid
    }
  }
  return start
}

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
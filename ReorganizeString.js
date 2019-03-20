// 767 medium heap

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  let dequeue = new PriorityQueue((a,b) => a.count > b.count)
  let map = {}
  S = S.split('')
  S.forEach(char => {
    map[char] = map[char] ? map[char]+1 : 1
  })
  Object.keys(map).forEach(char => {
    dequeue.offer({
      char: char,
      count: map[char]
    })
  })
  const max = S.length % 2 ? (S.length+1)/2 : S.length/2
  if (dequeue.peek().count > max) return ''
  let item = {}
  for (let i = 0; i < S.length; i = i+2) {
    if (!item.count) item = dequeue.poll()
    S[i] = item.char
    item.count--
  }
  for (let i = 1; i < S.length; i = i+2) {
    if (!item.count) item = dequeue.poll()
    S[i] = item.char
    item.count--
  }
  return S.join('')
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

console.log(reorganizeString('aaaabbbcc'))
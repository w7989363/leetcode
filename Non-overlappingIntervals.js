// 435 medium greedy

// 这个题跟安排最多的演出场次一样，贪婪的选取结束时间最早的安排

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  let len = intervals.length
  if (len < 2) return 0
  intervals.sort((a,b) => b.end - a.end)
  let pre = intervals.pop(), count = 1
  while(intervals.length) {
    let cur = intervals.pop()
    if (cur.start >= pre.end) {
      count++
      pre = cur
    }
  }
  return len - count
}

console.log(eraseOverlapIntervals([  {start:2,end:3}, {start:2,end:3},{start:2,end:3}, {start:1,end:3} ]))
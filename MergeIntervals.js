// 56 medium sort

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a,b) => a.start - b.start)
  let start = intervals[0].start, end = intervals[0].end
  let i = 0
  let ret = []
  while (++i < intervals.length) {
    if (intervals[i].start <= end) {
      end = Math.max(end, intervals[i].end)
    } else {
      ret.push({start,end})
      start = intervals[i].start
      end = intervals[i].end
    }
  }
  ret.push({start,end})
  return ret
}

console.log(merge([{start:8,end:10},{start:1,end:3},{start:2,end:6}]))
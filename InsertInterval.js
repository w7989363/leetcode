// 57 sort hard

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  let i = 0
  let ret = []
  let temp = { start: newInterval.start, end: newInterval.end }
  for (; i < intervals.length; i++) {
    if (newInterval.start > intervals[i].end) {
      ret.push(intervals[i])
      continue
    } else {
      temp.start = newInterval.start > intervals[i].start ? intervals[i].start : newInterval.start
      break
    }
  }
  for (; i< intervals.length; i++) {
    if (newInterval.end < intervals[i].start) {
      temp.end = newInterval.end
      break
    } else if (newInterval.end < intervals[i].end) {
      temp.end = intervals[i].end
      i++
      break
    } else {
      temp.end = newInterval.end
    }
  }
  ret.push(temp)
  for (; i<intervals.length; i++) {
    ret.push(intervals[i])
  }
  return ret
}

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
  if (intervals.length === 0) {
    return []
  }
  intervals = intervals.sort((x, y) => {
    if (x.start === y.start) {
      return y.end - x.end
    }
    return x.start - y.start
  })
  const ans = []
  let start = intervals[0].start
  let end = intervals[0].end
  for (const interval of intervals) {
    if (interval.start <= end) {
      end = Math.max(interval.end, end)
    } else {
      ans.push(new Interval(start, end))
      start = interval.start
      end = interval.end
    }
  }
  ans.push(new Interval(start, end))
  return ans
};

function Interval (start, end) {
  this.start = start
  this.end = end
}

console.log(merge(
  [
    new Interval(1, 1)]
))

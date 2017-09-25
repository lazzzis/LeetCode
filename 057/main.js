Object.defineProperty(Array.prototype, 'back', { // eslint-disable-line
  get: function () {
    return this[this.length - 1]
  },
  set: function (val) {
    this[this.length - 1] = val
    return val
  }
})

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
  const result = []
  let i = 0
  while (i < intervals.length && intervals[i].start < newInterval.start) {
    result.push(intervals[i])
    i++
  }

  if (i !== 0 && result.back.end >= newInterval.start) {
    result.back = new Interval(result.back.start, Math.max(result.back.end, newInterval.end))
  } else {
    result.push(newInterval)
  }

  while (i < intervals.length) {
    if (result.back.end >= intervals[i].start) {
      result.back = new Interval(result.back.start, Math.max(intervals[i].end, result.back.end))
    } else {
      result.push(intervals[i])
    }
    i++
  }
  return result
};


console.log(insert([
  new Interval(1, 3),
  new Interval(6, 9)
], new Interval(2, 5)))

console.log(insert([
  new Interval(4, 5),
  new Interval(6, 9)
], new Interval(1, 1)))

console.log(insert([
  new Interval(4, 5),
  new Interval(6, 9)
], new Interval(10, 100)))

console.log(insert([
  new Interval(1, 5)
], new Interval(5, 7)))

console.log(insert([
  new Interval(4, 5),
  new Interval(6, 9)
], new Interval(1, 100)))

console.log(insert([
  new Interval(1, 2),
  new Interval(3, 5),
  new Interval(6, 7),
  new Interval(8, 10),
  new Interval(12, 16)
], new Interval(4, 9)))

function Interval (start, end) {
  this.start = start
  this.end = end
}

// https://aaronice.gitbooks.io/lintcode/content/data_structure/largest_rectangle_in_histogram.html
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let ans = 0
  const stack = new Stack()
  for (let i = 0; i <= heights.length; i++) {
    const current = i === heights.length ? -1 : heights[i]
    while (!stack.empty() && current <= heights[stack.top()]) {
      const index = stack.pop()
      const w = stack.empty() ? i : i - stack.top() - 1
      ans = Math.max(ans, w * heights[index])
    }
    stack.push(i)
  }
  return ans
};

class Stack {
  constructor (vector = []) {
    this._vector = vector
  }

  pop () {
    if (this.length === 0) {
      throw new Error('Failed to pop: empty stack')
    }
    return this._vector.pop()
  }

  push (val) {
    return this._vector.push(val)
  }

  top () {
    return this._vector[this.length - 1]
  }

  get length () {
    return this._vector.length
  }

  empty () {
    return this.length === 0
  }

  clear () {
    this._vector = []
  }
}

if (process.env.LZS) {
  console.log(largestRectangleArea([1, 1, 3, 2, 2]))
  console.log(largestRectangleArea([1, 1, 3, 1, 1]))
  console.log(largestRectangleArea([1, 25, 55, 60, 27, 73]))
  console.log(largestRectangleArea([20, 14, 41, 49, 34]), brute([20, 14, 41, 49, 34]))
  const assert = require('chai').assert
  function brute (heights) {
    let ans = 0
    for (let i = 0; i < heights.length; i++) {
      let h = heights[i]
      for (let j = i; j >= 0; j--) {
        h = Math.min(h, heights[j])
        ans = Math.max(ans, h * (i - j + 1))
      }
    }
    return ans
  }
  const chance = new require('chance')()
  for (let _ = 0; _ < 0; _++) {
    const heights = Array.from({length: 5}, () => chance.integer({ min: 0, max: 100 }))
    const actual = largestRectangleArea(heights)
    const expected = brute(heights)
    assert.strictEqual(actual, expected, `${actual}, ${expected}, ${heights}`)
  }
}

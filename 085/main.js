// https://www.youtube.com/watch?v=2Yk3Avrzauk&list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4&index=57
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
    return 0
  }
  matrix = matrix.map((arr) => arr.map(Number))
  const sum = new Array(matrix.length)
  for (let i = 0; i < matrix.length; i++) {
    sum[i] = new Array(matrix[0].length).fill(0)
  }
  const rows = matrix.length
  const cols = matrix[0].length
  for (let j = 0; j < cols; j++) {
    let temp = 0
    for (let i = 0; i < rows; i++) {
      temp = matrix[i][j] ? temp + 1 : 0
      sum[i][j] = temp
    }
  }
  let maxx = 0
  for (const heights of sum) {
    maxx = Math.max(maxx, largestRectangleArea(heights))
  }
  return maxx
};

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
  console.log(maximalRectangle([ [ '1', '0', '1', '0', '0' ],
  [ '1', '0', '1', '1', '1' ],
  [ '1', '1', '1', '1', '1' ],
  [ '1', '0', '0', '1', '0' ] ]))
  console.log(maximalRectangle([[]]))
  console.log(maximalRectangle([
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0']
  ]))
  console.log(maximalRectangle([
    ['0', '1'],
    ['1', '0']
  ]))
}

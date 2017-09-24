/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = []
  stack.top = function () { return this[this.length - 1] }
  stack.lastTwoSum = function () { return this[this.length - 1] + this[this.length - 2] }
  return ops.reduce((sum, elt) => {
    if (elt === 'C') {
      sum -= stack.pop()
      return sum
    } else if (elt === 'D') {
      stack.push(stack.top() * 2)
    } else if (elt === '+') {
      stack.push(stack.lastTwoSum())
    } else {
      stack.push(Number(elt))
    }
    sum += stack.top()
    return sum
  }, 0)
};

if (process.env.LZS) { // local test
  console.log(calPoints(['5', '2', 'C', 'D', '+']))
  console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']))
}

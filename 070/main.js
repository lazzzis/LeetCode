/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0 || n === 1 || n === 2) {
    return n
  }
  let current = 0
  let prev = 2
  let pprev = 1
  for (let i = 3; i <= n; i++) {
    current = prev + pprev
    pprev = prev
    prev = current
  }
  return current
};

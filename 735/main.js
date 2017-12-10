/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = []
  let i = 0
  while (i < asteroids.length) {
    const as = asteroids[i]
    if (as > 0) {
      stack.push(as)
    } else {
      let broken = false
      while (stack.length && stack.back > 0) {
        if (stack.back > -as) {
          broken = true
          break
        } else if (stack.back === -as) {
          broken = true
          stack.pop()
          break
        } else if (stack.back < -as) stack.pop()
      }
      if (!broken) stack.push(as)
    }
    i++
  }
  return stack
};

Object.defineProperty(Array.prototype, 'back', { // eslint-disable-line
  get: function () {
    return this[this.length - 1]
  },
  set: function (val) {
    this[this.length - 1] = val
    return val
  }
})

if (process.env.LZS) {
  console.log(asteroidCollision([10, 2, -5]))
}

/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  function toMin (timeArr) {
    return (timeArr[0] * 10 + timeArr[1]) * 60 + timeArr[2] * 10 + timeArr[3]
  }
  function delta (origin, now) {
    origin = toMin(origin)
    now = toMin(now)
    return now > origin ? now - origin : 24 * 60 + now - origin
  }
  function dfs (index, timeArr, choices) {
    if (index === 4) {
      if (delta(choices, timeArr) < minn) {
        minn = delta(choices, timeArr)
        ans = timeArr.slice()
      }
      return
    }
    const conditions = [
      (digit, timeArr) => digit >= 0 && digit <= 2,
      (digit, timeArr) => (timeArr[0] === 2 && digit <= 3) || (timeArr[0] !== 2),
      (digit, timeArr) => digit >= 0 && digit <= 5,
      () => true
    ]
    for (const digit of choices) {
      const condition = conditions[index]
      if (condition(digit, timeArr)) {
        timeArr[index] = digit
        dfs(index + 1, timeArr, choices)
      }
    }
  }
  let minn = Infinity
  let ans = null
  time = time.replace(':', '')
  time = time.split('').map(item => Number(item))
  dfs(0, Array.from({ length: 4 }), time)
  return `${ans[0]}${ans[1]}:${ans[2]}${ans[3]}`
}

if (process.env.LZS) { // local test
  const assert = require('chai').assert
  assert.strictEqual(nextClosestTime('01:19'), '09:00')
  assert.strictEqual(nextClosestTime('00:00'), '00:00')
  assert.strictEqual(nextClosestTime('23:59'), '22:22')
  assert.strictEqual(nextClosestTime('21:19'), '21:21')
  assert.strictEqual(nextClosestTime('13:14'), '13:31')
  assert.strictEqual(nextClosestTime('09:55'), '09:59')
  assert.strictEqual(nextClosestTime('06:00'), '06:06')
  assert.strictEqual(nextClosestTime('23:59'), '22:22')
}

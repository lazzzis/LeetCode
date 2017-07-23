/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort()

  const ans = new Set()
  const indexes = {}
  let mmax = -Infinity, mmin = Infinity

  for (let i = nums.length - 1; i >= 0; i--) {
    mmax = Math.max(mmax, nums[i])
    mmin = Math.min(mmin, nums[i])
    if (!(nums[i] in indexes)) {
      indexes[nums[i]] = i
    }
  }

  for (let i1 = 0; i1 < nums.length; i1++) {
    for (let i2 = i1 + 1; i2 < nums.length; i2++) {
      const n1 = nums[i1]
      const n2 = nums[i2]
      const n3 = 0 - n1 - n2
      const i3 = indexes[n3]
      if (i3 !== -1 && i3 > i2) {
        ans.add([n1, n2, n3].sort().join(' '))
      }
    }
  }
  return Array.from(ans).map(x => x.split(' ').map(Number))
}

if (require.main === module) {
  const assert = require('assert')
  assert.deepStrictEqual(threeSum([-1, 0, 1, 2, -1, -4]), [
    [-1, 0, 1],
    [-1, -1, 2]
  ])

  assert.deepStrictEqual(threeSum([0, 0, 0]), [
    [0, 0, 0]
  ])

  assert.deepStrictEqual(threeSum([1, 2, 3]), [])

  assert.deepStrictEqual(threeSum([1, 2, 3, 1, -2, -1, -1, 2]), [
    [-2, 1, 1],
    [-1, -1, 2],
    [-1, -2, 3]
  ])
}

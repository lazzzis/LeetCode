var thirdMax = function (nums) {
  function insertHeap (item, arr) {
    if (item > arr[1]) {
      arr[1] = item
    }
    if (arr[1] > arr[0]) {
      ;[arr[1], arr[0]] = [arr[0], arr[1]]
    }
    if (arr[1] > arr[2]) {
      ;[arr[1], arr[2]] = [arr[2], arr[1]]
    }
  }

  let arr = []
  let i = nums.findIndex((item, i) => {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i])
    }
    return arr.length === 3
  })

  if (arr.length < 3) {
    return Math.max(...arr)
  }

  arr.sort((x, y) => x < y ? -1 : 1)
  ;[arr[0], arr[1]] = [arr[1], arr[0]]
  nums.slice(i + 1).forEach((item) => {
    if (!arr.includes(item)) {
      insertHeap(item, arr)
    }
  })
  return arr[1]
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert(thirdMax([1, 3, 2]) === 1)
  assert(thirdMax([1, 3, 2, 2, 3, 2]) === 1)
  assert(thirdMax([1, 3, 2, 6, 0, -1]) === 2)
  assert(thirdMax([1, 2]) === 2)
  assert(thirdMax([2, 2, 3, 1]) === 1)
}

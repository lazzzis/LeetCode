var findUnsortedSubarray = function (nums) {
  let maxx = Math.min(...nums)
  let minn = Math.max(...nums)
  let pivot = -1
  nums.forEach((item, i) => {
    if (item > maxx) {
      maxx = item
    } else if (item < maxx) {
      pivot = i
    }
  })
  let end = pivot
  pivot = -1
  nums.reverse().forEach((item, i) => {
    if (item < minn) {
      minn = item
    } else if (item > minn) {
      pivot = nums.length - 1 - i
    }
  })
  let start = pivot
  if (start < 0 || end < 0) {
    return 0
  }
  return end - start + 1
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert(findUnsortedSubarray([1, 3, 2]) === 2)
  assert(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]) === 5)
  assert(findUnsortedSubarray([2, 6, 8, 10, 15]) === 0)
  assert(findUnsortedSubarray([2, 6, 8, 10, 15, 1]) === 6)
  assert(findUnsortedSubarray([2]) === 0)
  assert(findUnsortedSubarray([2, 6]) === 0)
  assert(findUnsortedSubarray([12, 6, 6, 6]) === 4)
  assert(findUnsortedSubarray([12, 6, 12, 6, 6]) === 5)
  assert(findUnsortedSubarray([12, 12, 6, 6, 12]) === 4)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let num = Infinity
  let count = 1
  nums.forEach((item) => {
    if (item === num) {
      count++
    } else {
      count--
      if (!count) {
        num = item
        count = 1
      }
    }
  })
  return num
}

if (process.env.LZS) { // local test
  console.log(majorityElement([1, 2, 1]))
  console.log(majorityElement([1, 2, 1, 2, 2, 3]))
}

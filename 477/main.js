/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  const one = new Array(40).fill(0)
  const zero = new Array(40).fill(0)
  const helper = function (item) {
    let sum = 0
    for (let i = 0; i < 40; i++) {
      let rem = item % 2
      if (rem === 0) {
        sum += one[i]
        zero[i]++
      } else {
        sum += zero[i]
        one[i]++
      }
      item = item >> 1
    }
    return sum
  }
  let sum = 0
  for (const num of nums) {
    sum += helper(num)
  }
  return sum
};

console.log(totalHammingDistance([4, 14, 2]))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  function twoSum (start, end, sum) {
    const ans = []
    let lv = nums[0] - 1
    let rv = nums[0] - 1
    while (start < end) {
      lv = nums[start]
      rv = nums[end]
      if (lv + rv === sum) {
        ans.push([-sum, lv, rv])
        while (start < end && nums[start] === lv && nums[end] === rv) {
          start++
          end--
        }
      } else if (lv + rv > sum) {
        while (start < end && nums[end] === rv) {
          end--
        }
      } else if (lv + rv < sum) {
        while (start < end && nums[start] === lv) {
          start++
        }
      }
    }
    return ans
  }
  let ans = []
  nums.sort((x, y) => x < y ? -1 : 1)
  nums.forEach((item, index) => {
    if (index > 0 && nums[index - 1] === item) {
      return
    }
    const twos = twoSum(index + 1, nums.length - 1, -item)
    if (twos.length) {
      ans = ans.concat(twos)
    }
  })
  return ans
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-3, 4, 4, 8, -4, -4, 1, 2]))

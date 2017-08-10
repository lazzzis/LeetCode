/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let head = 0
  let tail = nums.length - 1
  const swap = (i, j) => {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  while (head < tail) {
    if (nums[head] === val) {
      swap(head, tail)
      tail--
    } else {
      head++
    }
  }
  if (nums[tail] !== val) {
    tail++
  }
  nums.splice(tail)
  return tail
}

if (process.env.LZS) { // local tests
  let arr = [3, 2, 2, 3]
  console.log(removeElement(arr, 3), arr)
}

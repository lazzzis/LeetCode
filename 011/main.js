/**
 * For a specific height, we try hard to find a max length.
 * Obviously, the closer to the edge the head and tail are, the longer the length is.
 * Hence, we triverse from the first element and last one.
 * Compared with the last height and the right one, take the shorter one into record, since for this
 * specific height value, the current length may be the longest.
 * E.g. if the left height is 6 and the right height is 4. Assume the distance between them is 3.
 * Therefore, for height value 4, the longest length is 4. Then we move the right pivot one unit to the left.
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let set = new Set(height)
  let left = 0
  let right = height.length - 1
  let maxx = -Infinity
  while (left < right) {
    let lv = height[left]
    let rv = height[right]
    let minHeight
    if (lv === rv) {
      set.add(lv)
      maxx = Math.max(maxx, (right - left) * lv)
      left++
      right--
    } else if (lv > rv) {
      maxx = Math.max(maxx, (right - left) * rv)
      set.add(rv)
      right--
    } else {
      maxx = Math.max(maxx, (right - left) * lv)
      set.add(lv)
      left++
    }
  }
  return maxx
};

if (require.main === module) {
  const assert = require('assert')
  const { randIntArr } = require('../utils')
  const chance = new require('chance')()
  const check = function (height) {
    let maxx = -Infinity
    for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
        maxx = Math.max(maxx, (j - i) * Math.min(height[i], height[j]))
      }
    }
    return maxx
  }

  for (let i = 0; i < 10; i ++) {
    let arr = randIntArr(chance.integer({ min:200, max: 1000 }), {min: 1, max: 100000})
    // console.log(arr)
    if (check(arr) !== maxArea(arr)) {
      console.log(arr)
    }
  }

}

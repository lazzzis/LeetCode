/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let maxx = -1
  let cnt = 0
  for (let i = 0; i < arr.length; i++) {
    maxx = Math.max(maxx, arr[i])
    if (maxx === i) {
      cnt++
      maxx = -1
    }
  }
  return cnt
}

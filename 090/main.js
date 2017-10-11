/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const ans = []
  nums.sort((x, y) => x - y)
  function subsetHelper (curId, taken, tempArr) {
    if (curId === nums.length) {
      ans.push(tempArr.slice())
      return
    }
    subsetHelper(curId + 1, false, tempArr)
    if (taken || nums[curId] !== nums[curId - 1]) {
      /*
        [1, 2, (2)]
        [1, (2), 2]
        (2) means that that 2 is not taken
        In this case, these two behavior will yield the exact same result
       */
      subsetHelper(curId + 1, true, tempArr.concat([nums[curId]]))
    }
  }
  subsetHelper(1, false, [])
  subsetHelper(1, true, [nums[0]])
  return ans
};

if (process.env.LZS) {
  console.log(subsetsWithDup([2, 1, 1, 2, 2]))
}

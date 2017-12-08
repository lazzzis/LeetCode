/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1.sort((x, y) => x < y ? -1 : 1)
  nums2.sort((x, y) => x < y ? -1 : 1)
  const ans = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i])
      j++
      i++
    } else if (nums1[i] < nums2[j]) {
      while (i < nums1.length && nums1[i] < nums2[j]) i++
    } else {
      while (j < nums2.length && nums1[i] > nums2[j]) j++
    }
  }
  return ans
};

console.log(intersect([1, 2, 2, 2, 2, 1, 2], [3, 2, 2]))

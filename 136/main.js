/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((res, elt) => res ^ elt)
};

if (process.env.LZS) {
  console.log(singleNumber([1, 2, 3, 2, 3]))
  console.log(singleNumber([1, 2, 3, 2, 1, 3, 0]))
}

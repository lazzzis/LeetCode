/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  let robbed = nums[0]
  let notRobbed = 0
  for (let i = 1; i < nums.length; i++) {
    const item = nums[i]
    ;[notRobbed, robbed] = [
      Math.max(notRobbed, robbed),
      notRobbed + item]
  }
  return Math.max(notRobbed, robbed)
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = []
  let prod = 1
  for (const item of nums) {
    output.push(prod)
    prod *= item
  }

  prod = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= prod
    prod *= nums[i]
  }
  return output
};

if (process.env.LZS) {
  console.log(productExceptSelf([1, 2]))
  console.log(productExceptSelf([1, 2, 3, 4]))
  console.log(productExceptSelf([]))
  console.log(productExceptSelf([10]))
}

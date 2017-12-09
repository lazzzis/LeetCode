/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const ans = []
  let remainder = 0
  let i = num1.length - 1
  let j = num2.length - 1
  while (remainder || i >= 0 || j >= 0) {
    let sum = (num1[i] == null ? 0 : +num1[i]) + (num2[j] == null ? 0 : +num2[j]) + remainder
    ans.push(sum % 10)
    remainder = Math.floor(sum / 10)
    j--
    i--
  }
  return ans.reverse().join('')
};

console.log(addStrings('0', '0'))

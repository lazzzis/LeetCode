/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  let ans = Array.from({ length: rowIndex + 1 }, () => 0)
  ans[0] = 1
  for (let i = 1; i <= rowIndex; i++) {
    let len = i + 1
    for (let j = len - 1; j >= 1; j--) {
      ans[j] = ans[j] + ans[j - 1]
    }
  }
  return ans
}

console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(8))

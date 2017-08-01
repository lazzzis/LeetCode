/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  } else if (rowIndex === 1) {
    return [1, 1]
  }
  let arr = [1, 1]
  for (let i = 2; i <= rowIndex; i++) {
    let prev = arr[0]
    for (let j = 1; j <= i - 1; j++) {
      let ori = arr[j]
      arr[j] = prev + arr[j]
      prev = ori
    }
    arr.push(1)
  }
  return arr
}

console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(8))

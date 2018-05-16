/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  for (const row of A) {
    let i = 0
    let j = row.length - 1
    while (i <= j) {
      [row[i], row[j]] = [row[j], row[i]]
      i++
      j--
    }
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        row[i] = 1
      } else {
        row[i] = 0
      }
    }
  }
  return A
}

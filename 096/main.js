/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const arr = new Array(n + 1)
  arr[0] = arr[1] = 1
  for (let i = 2; i <= n; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
      sum += arr[j - 1] * arr[i - j]
    }
    arr[i] = sum
  }
  return arr[n]
};

if (process.env.LZS) {
  console.log(numTrees(1))
  console.log(numTrees(0))
  console.log(numTrees(2))
  console.log(numTrees(3))
  console.log(numTrees(4))
  console.log(numTrees(40))
}

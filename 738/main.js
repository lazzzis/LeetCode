/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  function isIncreasing (num) {
    num = (num + '').split('').map(Number)
    for (let i = 1; i < num.length; i++) {
      if (num[i] < num[i - 1]) return false
    }
    return true
  }
  if (N <= 9) return N
  N = (N + '').split('').map(Number)
  let sum = N[0]
  let prev = N[0]
  let i
  for (i = 1; i < N.length; i++) {
    const item = N[i]
    if (item >= prev) {
      sum = sum * 10 + item
    } else {
      sum--
      break
    }
    prev = item
  }
  while (i < N.length) {
    sum = sum * 10 + 9
    i++
  }
  return isIncreasing(sum) ? sum : monotoneIncreasingDigits(sum)
};

if (process.env.LZS) {
  console.log(monotoneIncreasingDigits(12000))
  console.log(monotoneIncreasingDigits(12345))
  console.log(monotoneIncreasingDigits(10))
  console.log(monotoneIncreasingDigits(12785678569))
  console.log(monotoneIncreasingDigits(332))
  console.log(monotoneIncreasingDigits(443))
}

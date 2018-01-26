/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  function isPrime (num) {
    if (num <= 1) return false
    const k = Math.sqrt(num)
    for (let i = 2; i <= k; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  function bits (num) {
    let cnt = 0
    while (num > 0) {
      if (num % 2 === 1) cnt++
      num = Math.floor(num / 2)
    }
    return cnt
  }
  let cnt = 0
  while (L <= R) {
    if (isPrime(bits(L))) cnt++
    L++
  }
  return cnt
}

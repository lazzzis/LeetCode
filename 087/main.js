/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  if (s1.length === 1) {
    return s1 === s2
  }
  if (s1.split('').sort().join('') !== s2.split('').sort().join('')) {
    return false
  }
  for (let i = 0; i < s1.length - 1; i++) {
    if (isScramble(s1.slice(0, i + 1), s2.slice(0, i + 1)) &&
        isScramble(s1.slice(i + 1), s2.slice(i + 1))) {
      return true
    } else if (isScramble(s1.slice(0, i + 1), s2.slice(s2.length - 1 - i, s2.length)) &&
        isScramble(s1.slice(i + 1), s2.slice(0, s2.length - 1 - i))) {
      return true
    }
  }
  return false
};

if (process.env.LZS) {
  console.log(isScramble('great', 'rgtae'))
  console.log(isScramble('123', '312'))
  console.log(isScramble('abcd', 'bdac'))
}

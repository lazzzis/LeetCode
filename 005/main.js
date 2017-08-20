var longestPalindrome = function (s) {
  let ansj = 0
  let ansi = 0
  for (let i = 0; i < s.length; i++) {
    let len = 1
    while (i - len >= 0 && i + len < s.length) {
      if (s[i - len] !== s[i + len]) {
        break
      }
      len++
    }
    if (2 * (len - 1) + 1 > ansi - ansj + 1) {
      ansi = i + len - 1
      ansj = i - len + 1
    }
  }
  if (ansi === s.length - 1 && ansj === 0) {
    return s
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      continue
    }
    let len = 1
    while (i - len >= 0 && i + 1 + len < s.length) {
      if (s[i - len] !== s[i + 1 + len]) {
        break
      }
      len++
    }
    if (2 * len > ansi - ansj + 1) {
      ansj = i - len + 1
      ansi = i + 1 + len - 1
    }
  }
  return s.slice(ansj, ansi + 1)
}

if (process.env.LZS) { // local test
  const assert = require('assert')
  assert(longestPalindrome('babab') === 'babab')
  assert(longestPalindrome('babad') === 'bab')
  assert(longestPalindrome('bad') === 'b')
  assert(longestPalindrome('abcdasdfghjkldcba') === 'a')
  assert(longestPalindrome('cbba') === 'bb')
  assert(longestPalindrome('zzzz') === 'zzzz')
  let s = Array.from({length: 900}, () => {
    return String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26))
  }).join('')
  console.log(longestPalindrome(s))
}

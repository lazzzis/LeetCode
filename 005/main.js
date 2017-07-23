const longestPalindrome = function (s) {
  
  // return ans
}

if (require.main === module) {
  let s = ''
  for (let i = 0; i < 980; i += 1) {
    // if (i % 100 === 0) {
      // s += '' + Math.ceil(Math.random() * 10)
    // } else {
    s += 'a'
    // }
  }
  // s = 'abcdasdfghjkldcba'
  // s = 'babad'
  let ans = longestPalindrome(s)
  console.log(ans)
  console.log(ans === ans.split('').reverse().join(''))
}

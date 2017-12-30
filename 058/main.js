/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.split(/\s+/).filter(x => x)
  if (arr.length === 0) return 0
  return arr[arr.length - 1].length
};

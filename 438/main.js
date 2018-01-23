/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let cnt = 0
  const dcts = {}
  const map = {}
  const ans = []
  for (const c of p) {
    if (dcts[c] == null) dcts[c] = 0
    dcts[c] ++
    map[c] = 0
  }
  for (let i = 0; i < p.length - 1; i++) {
    const c = s[i]
    if (c in dcts && map[c] < dcts[c]) {
      map[c]++
      cnt++
    }
  }
  for (let i = p.length - 1; i < s.length; i++) {
    let c = s[i]
    if (c in dcts) {
      if (map[c] < dcts[c]) cnt++
      map[c]++
    }
    if (cnt === p.length) {
      ans.push(i - p.length + 1)
    }
    c = s[i - (p.length - 1)]
    if (c in dcts) {
      if (map[c] <= dcts[c]) cnt--
      map[c] --
    }
  }
  return ans
}

/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (wordlist, master) {
  function match (a, b) {
    let cnt = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) cnt++
    }
    return cnt
  }
  const used = []
  wordlist = wordlist.sort((x, y) => new Set(x).size - new Set(y).size)
  for (let _ = 0; _ < 10; _++) {
    const word = wordlist.find(
      (x) => used.every((item) => match(item.word, x) === item.cnt)
    )
    const cnt = master.guess(word)
    if (cnt === 6) {
      break
    } else {
      used.push({
        word,
        cnt
      })
    }
  }
}

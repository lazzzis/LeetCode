const Chance = require('chance')
const chance = new Chance()

function randIntArr (length, limit) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(chance.integer(limit))
  }
  return arr
}

module.exports = {
  randIntArr
}

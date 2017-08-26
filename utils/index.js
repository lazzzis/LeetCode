const Chance = require('chance')
const chance = new Chance()

function randIntArr (length, limit) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(chance.integer(limit))
  }
  return arr
}

function ListNode (val) {
  this.val = val
  this.next = null
}

function arrToList (arr) {
  const dummy = new ListNode(-1)
  let cur = dummy
  for (let item of arr) {
    cur.next = new ListNode(item)
    cur = cur.next
  }
  return dummy.next
}

function listToArr (head) {
  let cur = head
  const arr = []
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  return arr
}

module.exports = {
  randIntArr,
  arrToList,
  listToArr
}

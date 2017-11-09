/**
 * create a double linked list with the head and the tail
 * the next node of the head is the newest node, which is visisted most recently
 * the prev node of the tail is the oldest node, which is visisted least recently
 * every time a key is added, remove the prev node of the tail if the capacity is full;
 * otherwise, directly add that node as the next node of the had;
 * every time a node is visisted, remove that node from the list and then add it again to the list; that is that node
 * is moved as the next node of the head
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.size = 0
  this.head = new Node(0, 0)
  this.tail = new Node(1, 1)
  this.head.next = this.tail
  this.tail.prev = this.head
  this.nodes = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!(key in this.nodes)) {
    return -1
  }
  const node = this.nodes[key]
  this.remove(node)
  this.add(node)

  return node.value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = null
  if (key in this.nodes) {
    node = this.nodes[key]
    node.value = value
    this.remove(node)
  } else {
    if (this.size === this.capacity) {
      const key = this.tail.prev.key
      this.remove(this.tail.prev)
      delete this.nodes[key]
    } else {
      this.size++
    }
    node = new Node(key, value)
    this.nodes[key] = node
  }
  this.add(node)
};

LRUCache.prototype.add = function (node) {
  node.next = this.head.next
  node.prev = this.head
  node.next.prev = node
  this.head.next = node
}

LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

class Node {
  constructor (key, value) {
    this.key = key
    this.value = value
    this.prev = this.next = null
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

if (process.env.LZS) {
  let l = new LRUCache(2)
  l.put(1, 1)
  l.put(2, 2)
  console.log(l.get(1))
  l.put(3, 3)
  console.log(l.get(2))
  l.put(4, 4)
  console.log(l.get(1))
  console.log(l.get(3))
  console.log(l.get(4))

  console.log(`------`)
  l = new LRUCache(1)
  l.put(2, 1)
  console.log(l.get(2))
  l.put(3, 2)
  console.log(l.get(2))
  console.log(l.get(3))

  console.log(`------`)
  l = new LRUCache(2)
  console.log(l.get(2))
  l.put(2, 6)
  console.log(l.get(1))
  l.put(1, 2)
  l.put(1, 5)
  l.put(1, 6)
  console.log(l.get(2))
  console.log(l.get(1))
}

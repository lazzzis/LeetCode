class Queue {
  constructor () {
    this._front = this._back = { val: null, next: null }
    this._length = 0
  }

  enqueue (val) {
    this._back.next = {
      val,
      next: null
    }
    this._back = this._back.next
    this._length += 1
  }

  dequeue () {
    if (this._length === 0) {
      throw new Error('failed to dequeue: empty queue')
    }
    this._length -= 1
    this._front = this._front.next
    return this._front.val
  }

  peek () {
    if (this._length === 0) {
      throw new Error('Failed to peek: empty queue')
    }
    return this._front.next.val
  }

  get length () {
    return this._length
  }

  empty () {
    return this._length === 0
  }

  clear () {
    this._front = this._back = { val: null, next: null }
    this._length = 0
  }
}

class PriorityQueue {
  constructor (comparator = (x, y) => x - y) {
    this._vector = []
    this.comparator = comparator
  }

  enqueue (val) {
    this._vector.push(val)
    this.bubbleUP(this._vector.length - 1)
  }

  dequeue () {
    const index = this.length - 1
    if (index === -1) {
      throw new Error('Dequeue failed: empty priority queue')
    }
    const val = this._vector[0]
    const newVal = this._vector.pop()
    if (this.length > 0) {
      this._vector[0] = newVal
      this.sinkDown(0)
    }
    return val
  }

  peek () {
    if (this.length === 0) {
      throw new Error('Peek failed: empty priority queue')
    }
    return this._vector[0]
  }

  swap (l, r) {
    [this._vector[l], this._vector[r]] = [this._vector[r], this._vector[l]]
  }

  bubbleUP (index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2)
      if (this.comparator(this._vector[index], this._vector[parent]) < 0) {
        this.swap(index, parent)
        index = parent
      } else {
        break
      }
    }
  }

  sinkDown (index) {
    while (index < this.length) {
      const left = 2 * index + 1
      const right = 2 * index + 2
      let smallest = index

      if (left < this.length && this.comparator(this._vector[left], this._vector[smallest]) < 0) {
        smallest = left
      }

      if (right < this.length && this.comparator(this._vector[right], this._vector[smallest]) < 0) {
        smallest = right
      }

      if (smallest === index) {
        break
      }

      this.swap(index, smallest)
      index = smallest
    }
  }

  empty () {
    return this.length === 0
  }

  get length () {
    return this._vector.length
  }
}

module.exports = {
  Queue,
  PriorityQueue
}

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const arr = (num + '').split('').map(x => +x)
  const buckets = new Array(10)
  for (let i = 0; i < arr.length; i++) {
    buckets[arr[i]] = i
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 9; j > arr[i]; j--) {
      if (buckets[j] > i) {
        ;[arr[i], arr[buckets[j]]] = [arr[buckets[j]], arr[i]]
        return +arr.join('')
      }
    }
  }
  return num
};

if (process.env.LZS) {
  console.log(maximumSwap(1234))
  console.log(maximumSwap(9927))
  console.log(maximumSwap(9987))
}

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  function dfs (room) {
    if (vis[room]) {
      return
    }
    vis[room] = true
    for (const x of rooms[room]) {
      dfs(x)
    }
  }
  const N = rooms.length
  const vis = Array.from({length: N}, () => false)
  dfs(0)
  for (let i = 0; i < N; i++) {
    if (!vis[i]) {
      return false
    }
  }
  return true
}

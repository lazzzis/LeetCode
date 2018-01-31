var connect = function (root) {
  function dfs (root) {
    if (root == null) return
    let cur = null
    let head = null
    while (root != null) {
      for (const p of [root.left, root.right]) {
        if (p == null) continue
        if (cur == null) {
          head = cur = p
        } else {
          cur.next = p
          cur = cur.next
        }
      }
      root = root.next
    }
    dfs(head)
  }
  dfs(root)
}

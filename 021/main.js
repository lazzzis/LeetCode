var mergeTwoLists = function (l1, l2) {
  let p1 = l1
  let p2 = l2

  let pointer = {next: null}
  const head = pointer

  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      pointer.next = p1
      p1 = p1.next
    } else {
      pointer.next = p2.next
      p2 = p2.next
    }
    pointer = pointer.next
  }

  if (p1 !== null) {
    pointer.next = p1
  } else {
    pointer.next = p2
  }

  return head.next
}

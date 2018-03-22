function creatLinkedList() {
  return {
    head: null,
    tail: null
  }
}

function createNode(item) {
  return {
    item: item,
    next: null
  }
}

const ll = creatLinkedList()
const n1 = createNode(1)
const n2 = createNode(2)
const n3 = createNode(3)
const n4 = createNode(4)
const n5 = createNode(5)

ll.head = n1
ll.tail = n5
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

function findtheMiddleInLinkedList() {
  let cur = ll.head
  let mid = ll.head
  let count = 0

  while (cur !== null) {
    if (count % 2 === 1) {
      mid = mid.next
    }
    count++
    cur = cur.next
  }

  if (mid !== null) {
    return mid
  }
  return -1
}

test('Finding the middle of a singly linked list.', () => {
  expect(findtheMiddleInLinkedList().item).toBe(3)
})

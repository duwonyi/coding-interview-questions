const BST = {
  root: null
}

function createNode(item) {
  return {
    item: item,
    left: null,
    right: null
  }
}

function insertNodeinBST(item) {
  if (BST.root === null) {
    BST.root = createNode(item)
    return
  }

  let target = BST.root
  let newNode = createNode(item)

  while (target !== null) {
    if (item < target.item) {
      if (target.left === null) {
        target.left = newNode
        break
      } else {
        target = target.left
      }
    } else {
      if (target.right === null) {
        target.right = newNode
        break
      } else {
        target = target.right
      }
    }
  }
}

function inorder(node, fn) {
  if (node) {
    inorder(node.left, fn)
    fn(node.item)
    inorder(node.right, fn)
  }
}

test('Write an insert method for a BST', () => {
  let output = ''

  insertNodeinBST(4)
  insertNodeinBST(3)
  insertNodeinBST(2)
  insertNodeinBST(1)

  inorder(BST.root, item => output += item)

  expect(output).toBe('1234')
})

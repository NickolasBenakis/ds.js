class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
  }

  add(value) {
    const node = new Node(value);
    return this.traverseTree(this.root, node);
  }

  traverseTree(pointer, newNode) {
    if (newNode.value > pointer.value) {
      if (!pointer.right) {
        pointer.right = newNode;
        return newNode;
      } else {
        return this.traverseTree(pointer.right, newNode);
      }
    } else if (newNode.value < pointer.value) {
      if (!pointer.left) {
        pointer.left = newNode;
        return newNode;
      } else {
        return this.traverseTree(pointer.left, newNode);
      }
    }
  }
}

export default BST;

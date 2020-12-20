class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(value = null) {
    this.root = new Node(value);
    this.depth = 0;
  }

  add(value) {
    const node = new Node(value);
    if (this.root.value == null) {
      this.root = node;
      return this.root;
    }

    const { newNode, count } = this.#traverseToAdd(this.root, node, 0);
    this.depth = count;
    return newNode;
  }

  #traverseToAdd(pointer, newNode, count) {
    if (newNode.value > pointer.value) {
      if (!pointer.right) {
        pointer.right = newNode;
        return {
          newNode,
          count: ++count,
        };
      } else {
        return this.#traverseToAdd(pointer.right, newNode, ++count);
      }
    } else if (newNode.value < pointer.value) {
      if (!pointer.left) {
        pointer.left = newNode;
        return {
          newNode,
          count: ++count,
        };
      } else {
        return this.#traverseToAdd(pointer.left, newNode, ++count);
      }
    }
  }
}

export default BST;

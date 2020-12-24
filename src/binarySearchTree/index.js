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

    const { newNode, count } = this.#traverseToAdd(this.root, node);
    this.#updateTreeDepth(count);
    return newNode;
  }

  get(value) {
    return this.#traverseToGet(value);
  }

  #updateTreeDepth(count) {
    this.depth = count;
  }

  #traverseToGet(value, pointer = this.root) {
    if (value > pointer.value) {
      if (!pointer.right) {
        return undefined;
      } else {
        return this.#traverseToGet(value, pointer.right);
      }
    } else if (value < pointer.value) {
      if (!pointer.left) {
        return undefined;
      } else {
        return this.#traverseToGet(value, pointer.left);
      }
    } else {
      return pointer.value;
    }
  }

  /**
   * pointer : points to the origin node
   * newNode: is the newNode that has to be added
   * count: counts the tree level depth
   */
  #traverseToAdd(pointer, newNode, count = 0) {
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

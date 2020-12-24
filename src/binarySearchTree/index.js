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
    return this.#traverseToGet(value)?.value;
  }

  delete(value) {
    const { node, parent } = this.#traverseToDelete(value) || {};
    if (!parent || !node) return undefined;

    // todo: reconstruct child nodes
    // if has children
    // then the right ones should be parents
    // for the left ones until there is no right.
    


    if (parent.right.value === value) {
      parent.right = null;
    } else {
      parent.left = null;
    }
    return value;
  }

  #updateTreeDepth(count) {
    this.depth = count;
  }

  #traverseToDelete(value, pointer = this.root, parent = null) {
    if (value > pointer.value) {
      if (!pointer.right) {
        return undefined;
      } else {
        return this.#traverseToDelete(value, pointer.right, pointer);
      }
    } else if (value < pointer.value) {
      if (!pointer.left) {
        return undefined;
      } else {
        return this.#traverseToDelete(value, pointer.left, pointer);
      }
    } else {
      return { node: pointer, parent };
    }
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
      return pointer;
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

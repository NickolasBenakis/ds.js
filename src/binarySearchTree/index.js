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
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return currentNode.value;
      }
    }
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

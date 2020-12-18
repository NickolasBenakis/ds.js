class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const node = this.#createNewNode(value);

    this.length++;

    if (!this.head) {
      this.tail = this.head = node;
    } else {
      let previousHead = this.head;
      this.head = node;
      this.head.next = previousHead;
    }
    return this;
  }

  append(value) {
    const node = this.#createNewNode(value);

    this.length++;

    if (!this.head) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    return this.tail.value;
  }

  /** This get is implemented with while loop */
  _get(value) {
    if (!this.head) throw new Error('no elements initialized');

    if (this.length === 1) {
      return this.getHead();
    }

    let pointer = this.head;
    let found = false;
    while (!found) {
      if (pointer.value === value) {
        found = true;
      } else {
        if (pointer.next == null) {
          return undefined;
        }
        const nextNode = pointer.next;
        pointer = nextNode;
      }
    }
    return found ? pointer.value : undefined;
  }

  /** This get is implemented with recursion */

  get(value) {
    if (!this.head) throw new Error('no elements initialized');

    if (this.length === 1) {
      return this.getHead();
    }
    return this.#traverseNodes(value, false, this.head);
  }

  size() {
    return this.length;
  }

  #traverseNodes(value, found, node) {
    if (found) return node.value;

    found = node.value === value;

    if (!found && node.next == null) return undefined;
    if (!found) {
      const nextNode = node.next;
      node = nextNode;
    }

    return this.#traverseNodes(value, found, node);
  }

  #createNewNode(value) {
    return {
      value,
      next: null,
    };
  }
}

export default LinkedList;

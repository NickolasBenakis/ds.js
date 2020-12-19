class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const node = new Node(value);

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
    const node = new Node(value);

    this.length++;

    if (!this.head) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }

  addTo(index, value) {
    if (index > this.length) throw new Error('higher than length');
    if (index < 0) throw new Error('negative index');
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);

    const node = new Node(value);

    const previousNode = this.#findByIndex(index - 1);
    if (previousNode) {
      const next = previousNode.next;
      previousNode.next = node;
      node.next = next;
      this.length++;
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
    return found ? pointer?.value : undefined;
  }

  /** This get is implemented with recursion */

  get(value) {
    if (!this.length) throw new Error('no elements initialized');

    if (this.length === 1) {
      return this.getHead();
    }
    return this.#find(value, this.head, false)?.value;
  }

  getAt(index) {
    if (!this.length) throw new Error('no elements initialized');
    if (index > this.length) throw new Error('higher than length');

    if (index === 0) return this.head.value;
    if (index === this.length) return this.tail.value;

    return this.#findByIndex(index)?.value;
  }

  shift() {
    if (this.length === 0) {
      throw new Error("can't pop an element from empty list");
    }

    const previousHead = this.head;
    const nextHead = this.head.next;
    this.head = nextHead;
    this.length--;

    return previousHead.value;
  }

  pop() {
    if (this.length === 0) {
      throw new Error("can't pop an element from empty list");
    }

    const previousTail = this.tail;
    const preTail = this.#getPreTail();
    preTail.next = null;
    this.tail = preTail;
    this.length--;

    return previousTail.value;
  }

  delete(index) {
    if (!this.length) throw new Error('no elements initialized');
    if (index > this.length) throw new Error('higher than length');
    if (index < 0) throw new Error('negative index');

    if (index === 0) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }

    const prevNode = this.#findByIndex(index - 1);
    const nextRef = prevNode.next.next;
    prevNode.next = nextRef;
    this.length--;
    return prevNode.next.value;
  }

  size() {
    return this.length;
  }

  #getPreTail() {
    if (this.length === 1) return this.tail;
    if (this.length === 2) return this.head;

    let pointer = this.head;
    let found = false;
    while (!found) {
      if (pointer?.next?.next == null) {
        found = true;
      } else {
        const nextNode = pointer.next;
        pointer = nextNode;
      }
    }
    return found
      ? pointer
      : new Error("can't get a preTail from an empty list");
  }

  #find(value, node, found) {
    if (found) return node;

    found = node.value === value;

    if (!found && node.next == null) return undefined;
    if (!found) {
      const nextNode = node.next;
      node = nextNode;
    }

    return this.#find(value, node, found);
  }

  #findByIndex(index) {
    let counter = 0;
    let pointer = this.head;
    let found = false;
    while (!found) {
      if (counter === index) {
        found = true;
      } else {
        let nextPointer = pointer.next;
        pointer = nextPointer;
        counter++;
      }
    }
    return found ? pointer : undefined;
  }
}

export default LinkedList;

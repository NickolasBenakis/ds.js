class Queue {
  #queue;
  #maxSize;
  constructor(list = [], MAX_SIZE = Infinity) {
    this.#queue = list;
    this.size = this.#queue.length;
    this.#maxSize = MAX_SIZE;
  }

  enQueue(element) {
    if (this.isFull()) throw new Error('this queue is full');

    this.#queue.push(element);
    this.size++;
    return this.#queue;
  }

  deQueue() {
    this.#queue.shift();
    this.size--;
    return this.#queue;
  }

  peek() {
    return this.#queue[0];
  }

  isEmpty() {
    return !!!this.#queue.length;
  }

  isFull() {
    return this.#queue.length === this.#maxSize;
  }
}

export default Queue;

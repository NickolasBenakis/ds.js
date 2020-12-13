class Stack {
  #stack;

  constructor(list = []) {
    this.#stack = list;
    this.size = this.#stack.length;
  }

  push(element) {
    this.#stack.push(element);
    this.size++;
    return this;
  }

  pop() {
    this.#stack.pop();
    this.size--;
    return this;
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }
}

export default Stack;

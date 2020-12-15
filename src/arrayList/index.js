class ArrayList {
  #list;

  constructor(list = []) {
    this.#list = list.reduce(
      (acc, current, i) => ({ ...acc, [i]: current }),
      {}
    );
    this.size = Object.keys(this.#list).length;
  }

  push(element) {
    this.#list[this.size] = element;
    this.size++;
    return this.#list;
  }

  pop() {
    const deleted = this.#list[this.size - 1];
    delete this.#list[this.size - 1];
    this.size--;
    return deleted;
  }

  get(index) {
    if (index >= this.size) throw new Error('exceed arrays size');
    return this.#list[index];
  }

  delete(index) {
    if (index >= this.size) throw new Error('exceed arrays size');
    let temp = this.#list;
    this.#swapIndeces(temp, index);
    this.size--;
    return this.#list;
  }

  #swapIndeces(list, index) {
    delete this.#list[index];
    this.#list = Object.entries(list)
      .map((key, i) => {
        return [i, key[1]];
      })
      .reduce((acc, current) => {
        return { ...acc, [current[0]]: current[1] };
      }, {});
    return;
  }
}

export default ArrayList;

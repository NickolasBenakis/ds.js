import LinkedList from './index';

describe('LinkedList', () => {
  it('creates an instance', () => {
    const list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
  });

  it('appends new elements', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail.value).toEqual(2);
    expect(list.tail.next).toEqual(null);
  });

  it('prepends new elements', () => {
    const list = new LinkedList();
    list.prepend(1);
    list.prepend(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toEqual(null);
  });

  it('getHead, getTail', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.getHead()).toEqual(1);
    expect(list.getTail()).toEqual(2);
  });

  it('get(recursion) random value', () => {
    const list = new LinkedList();
    [...new Array(10).fill()].forEach((item, index) => {
      list.append(index + 1);
    });

    expect(list.get(0)).toEqual(undefined);
    expect(list.get(1)).toEqual(1);
    expect(list.get(10)).toEqual(10);
  });

  it('get(while_loop) random value', () => {
    const list = new LinkedList();
    [...new Array(10).fill()].forEach((item, index) => {
      list.append(index + 1);
    });

    expect(list._get(0)).toEqual(undefined);
    expect(list._get(1)).toEqual(1);
    expect(list._get(10)).toEqual(10);
  });
});

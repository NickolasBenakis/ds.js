import LinkedList from './index';

describe('LinkedList', () => {
  it('creates an instance', () => {
    const list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list).toMatchSnapshot();
  });

  it('addsTo new elements', () => {
    const list = new LinkedList();
    list.addTo(0, 'test');
    expect(list.head.value).toEqual('test');
    expect(list.tail.value).toEqual('test');
    expect(() => list.addTo(2, 'test')).toThrow(
      new Error('higher than length')
    );
    list.addTo(1, 'test2');
    expect(list.head.value).toEqual('test');
    expect(list.tail.value).toEqual('test2');
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

  it('getAt specific index', () => {
    const list = new LinkedList();
    [...new Array(10).fill()].forEach((item, index) => {
      list.append(index + 1);
    });

    expect(list.getAt(0)).toEqual(1);
    expect(list.getAt(1)).toEqual(2);
    expect(list.getAt(2)).toEqual(3);

    expect(list.getAt(10)).toEqual(10);
    expect(() => list.getAt(11)).toThrow(new Error('higher than length'));
  });

  it('pops last element', () => {
    const list = new LinkedList();
    [...new Array(3).fill()].forEach((item, index) => {
      list.append(index + 1);
    });

    expect(list.pop()).toEqual(3);
    expect(list.getTail()).toEqual(2);
    expect(list.pop()).toEqual(2);
    expect(list.getTail()).toEqual(1);
    expect(list.pop()).toEqual(1);
    expect(list.length).toEqual(0);
    expect(() => list.pop()).toThrow(
      new Error("can't pop an element from empty list")
    );
  });

  it('shifts first element', () => {
    const list = new LinkedList();
    [...new Array(3).fill()].forEach((item, index) => {
      list.append(index + 1);
    });

    expect(list.shift()).toEqual(1);
    expect(list.getHead()).toEqual(2);
    expect(list.shift()).toEqual(2);
    expect(list.getHead()).toEqual(3);
    expect(list.shift()).toEqual(3);
    expect(list.length).toEqual(0);
    expect(() => list.pop()).toThrow(
      new Error("can't pop an element from empty list")
    );
  });

  it('deletes element at index', () => {
    const list = new LinkedList();
    [...new Array(10).fill()].forEach((item, index) => {
      list.append(index + 1);
    });
    expect(list.size()).toEqual(10);

    expect(list.delete(0)).toEqual(1);
    expect(list.size()).toEqual(9);

    expect(() => list.delete(-1)).toThrow(new Error('negative index'));
  });

  it('reverse a linked list', () => {
    const list = new LinkedList();
    [...new Array(4).fill()].forEach((item, index) => {
      list.append(index + 1);
    });
    expect(list.size()).toEqual(4);

    expect(list.head.next).not.toEqual(null);
    expect(list.tail.next).toEqual(null);
    list.reverse();

    expect(list.head.next).toEqual(null);
    expect(list.tail.next).not.toEqual(null);

    expect(list.reverse()).toMatchSnapshot();
  });
});

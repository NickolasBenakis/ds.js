import ArrayList from './index';

describe('ArrayList', () => {
  it('creates an instance', () => {
    const list = new ArrayList([1, 2]);
    expect(list).toBeInstanceOf(ArrayList);
  });

  it('pushes, pops', () => {
    const list = new ArrayList(['test', 'test1']);
    list.push('test2');
    expect(list.get(2)).toEqual('test2');
    expect(list.pop()).toEqual('test2');
    expect(list.get(1)).toEqual('test1');
    expect(() => list.get(2)).toThrow(new Error('exceed arrays size'));
  });

  it('deletes a random index', () => {
    const list = new ArrayList(['name0', 'name1', 'name3', 'name4']);
    expect(list.size).toEqual(4);

    list.delete(1);

    expect(list.size).toEqual(3);
    expect(list.get(0)).toEqual('name0');
    expect(list.get(1)).toEqual('name3');
    expect(list.get(2)).toEqual('name4');
    expect(() => list.get(3)).toThrow(new Error('exceed arrays size'));

    list.delete(2);

    expect(list.size).toEqual(2);
    expect(list.get(0)).toEqual('name0');
    expect(list.get(1)).toEqual('name3');
    expect(() => list.get(2)).toThrow(new Error('exceed arrays size'));

    list.delete(1);

    expect(list.size).toEqual(1);
    expect(list.get(0)).toEqual('name0');
  });
});

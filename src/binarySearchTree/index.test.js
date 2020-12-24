import BST from './index';

describe('BST', () => {
  it('creates an instance of BST', () => {
    const bst = new BST();
    expect(bst).toBeInstanceOf(BST);
  });

  it('creates a BST with root', () => {
    const bst = new BST(10);
    expect(bst.root.value).toEqual(10);
    expect(bst.depth).toEqual(0);
  });

  it('adds nodes to BST', () => {
    const bst = new BST(10);
    bst.add(5);
    bst.add(12);
    expect(bst.root.left.value).toEqual(5);
    expect(bst.root.right.value).toEqual(12);
    bst.add(7);
    bst.add(4);

    expect(bst.root.left.right.value).toEqual(7);
  });

  it('calculates the depth of BST', () => {
    const bst = new BST(10);
    expect(bst.depth).toEqual(0);
    bst.add(5);
    expect(bst.depth).toEqual(1);
    bst.add(12);
    bst.add(7);
    expect(bst.depth).toEqual(2);
    bst.add(3);
    expect(bst.depth).toEqual(2);
  });

  it('gets nodes from BST', () => {
    const bst = new BST(10);
    bst.add(5);
    bst.add(12);
    bst.add(7);
    expect(bst.get(7)).toEqual(7);
    expect(bst.get(11)).toEqual(undefined);
  });

  it('deletes nodes from BST', () => {
    const bst = new BST(10);
    bst.add(5);
    bst.add(12);
    bst.add(7);
    bst.delete(7);
    expect(bst.delete(5)).toEqual(5);
    expect(bst.get(7)).toEqual(undefined);
    expect(bst.get(5)).toEqual(undefined);
  });
});

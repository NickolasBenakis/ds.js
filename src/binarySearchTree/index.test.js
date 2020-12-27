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

  it('deletes node with children from BST', () => {
    const bst = new BST(20);
    bst.add(22);
    bst.add(10);
    bst.add(14);
    bst.add(13);
    bst.add(16);
    bst.add(15);
    bst.add(17);

    bst.delete(14);
    const replacedNode = bst.root.left.right;

    expect(replacedNode.value).toEqual(15);
    expect(replacedNode.left.value).toEqual(13);
    expect(replacedNode.right.value).toEqual(16);
  });
});

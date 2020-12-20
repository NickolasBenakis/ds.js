import BST from './index';

describe('BST', () => {
  it('creates an instance of BST', () => {
    const bst = new BST();
    expect(bst).toBeInstanceOf(BST);
  });

  it('creates a BST with root', () => {
    const bst = new BST(10);
    expect(bst.root.value).toEqual(10);
  });

  it('adds nodes to BST', () => {
    const bst = new BST(10);
    bst.add(5);
    bst.add(12);
    expect(bst.root.left.value).toEqual(5);
    expect(bst.root.right.value).toEqual(12);
    bst.add(7);
    expect(bst.root.left.right.value).toEqual(7);
  });
});

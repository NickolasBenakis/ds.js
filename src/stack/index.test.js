import Stack from './index';

describe('Stack', () => {
  it('creates a stack instance', () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });

  it('creates a stack instance with a given list', () => {
    const stack = new Stack([2]);
    expect(stack.size).toEqual(1);
    expect(stack.peek()).toEqual(2);
  });

  it('push element', () => {
    const stack = new Stack();
    stack.push('test');
    expect(stack.size).toEqual(1);
    expect(stack.peek()).toEqual('test');
  });

  it('push element', () => {
    const stack = new Stack(['test']);
    expect(stack.size).toEqual(1);
    stack.pop();
    expect(stack.size).toEqual(0);
  });
});

import Queue from './index';

describe('Queue', () => {
  it('creates a queue instance', () => {
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });

  it('en-queues, de-queues element', () => {
    const queue = new Queue();
    expect(queue.enQueue('test')).toEqual(['test']);
    expect(queue.deQueue()).toEqual([]);
  });

  it('peeks element', () => {
    const queue = new Queue(['test']);
    expect(queue.peek()).toEqual('test');
  });

  it('returns the queue size', () => {
    const queue = new Queue(['test']);
    expect(queue.size).toEqual(1);
  });

  it('checks if queue is full', () => {
    const queue = new Queue(['test']);
    expect(queue.isFull()).toEqual(false);
    const queue2 = new Queue(['test'], 1);
    expect(queue2.isFull()).toEqual(true);
  });
});

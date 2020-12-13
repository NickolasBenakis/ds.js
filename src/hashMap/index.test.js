import HashMap from './index';

describe('HashMap', () => {
  it('returns a hashmap', () => {
    const map = new HashMap();
    expect(map).toBeInstanceOf(HashMap);
  });

  it('sets, gets key, value', () => {
    const map = new HashMap();
    map.set('test', 'value');
    map.set('name', 'nick');
    expect(map.get('test')).toEqual('value');
    expect(map.get('name')).toEqual('nick');
  });

  it('returns the size', () => {
    const map = new HashMap();
    expect(map.size()).toEqual(0);
    map.set('name', 'nick');
    expect(map.size()).toEqual(1);
  });
});

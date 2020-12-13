class HashMap {
  constructor() {
    this.values = new Array(1000);
  }

  _handleError(reason) {
    switch (reason) {
      case 'key':
        throw new Error('no key provided');
      case 'remove':
        throw new Error('no key found to be removed');
      default:
        throw new Error('generic error');
    }
  }

  _isEmpty(hashKey) {
    return !(this.values[hashKey] && this.values[hashKey].length);
  }

  _generateHashKey(key) {
    const hashInt = key
      .split('')
      .map((el) => el.charCodeAt())
      .reduce((acc, current) => acc + current, 0);
    return hashInt % this.values.length;
  }

  _getHashKeyStore(hashKey, key) {
    if (this._isEmpty(hashKey)) return undefined;

    return this.values[hashKey].find((_store) => _store[0] === key);
  }

  _setToHashKeyStore({ hashKey, key, value }) {
    this.values[hashKey].push([key, value]);
    return [key, value];
  }

  _initializeStore({ hashKey, key, value }) {
    this.values[hashKey] = [];
    this.values[hashKey].push([key, value]);
    return this.values[hashKey][0];
  }

  _handleWithCollision({ hashKey, key, value }) {
    const store = this._getHashKeyStore(hashKey, key);
    if (store) {
      store[1] = value;
      return store;
    } else {
      // collision happens
      return this._setToHashKeyStore({ hashKey, key, value });
    }
  }

  _deleteStore(hashKey, key) {
    this.values[hashKey] = this.values[hashKey].filter(
      (_store) => _store[0] !== key
    );
  }

  set(key, value) {
    if (!key.length) this._handleError('key');

    const hashKey = this._generateHashKey(key);

    if (this._isEmpty(hashKey)) {
      this._initializeStore({ hashKey, key, value });
    }

    return this._handleWithCollision({ hashKey, key, value });
  }

  get(key) {
    if (!key.length) this._handleError('key');

    const hashKey = this._generateHashKey(key);

    const store = this._getHashKeyStore(hashKey, key);
    return store ? store[1] : undefined;
  }

  remove(key) {
    if (!key.length) this._handleError('key');

    const hashKey = this._generateHashKey(key);
    const store = this._getHashKeyStore(hashKey, key);

    if (!store) {
      this._handleError('remove');
    }

    this._deleteStore(hashKey, key);
  }

  size() {
    return this.values.flat().filter((el) => !!el).length;
  }
}

export default HashMap;

// const map = new HashMap();
// console.log(map.set('name', 'zoro'));
// console.log(map.set('d', 'collision-n'));
// console.log(map.set('22', 'collision-22'));
// console.log(map.set('23', 'collision-22'));

// console.log(map.set('age', 27));

// console.log(map.get('22'));
// console.log(map.remove('name'));
// console.log(map.get('name'));
// console.log(map.set('name', 'zoro'));
// console.log(map.size(), map);

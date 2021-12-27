class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

/*
*
* hash table using seperate chaining
*
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.keys = [];
    this.values = [];
  }

  _hash(key) {
    let total = 0;
    let weirdPrime = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    const item = new Node(key, value)
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }
    
    for(let index in this.keyMap[hashedKey]) {
      const itemKeyMap = this.keyMap[hashedKey][index]
      if (itemKeyMap.key === key) {
        let indexRemove = this.values.findIndex((itemValue) => itemValue === itemKeyMap.value);
        this.values.splice(indexRemove, 1);
        this.keys.splice(indexRemove, 1);
        this.keyMap[hashedKey][index] = item;
        this.keys.push(key);
        this.values.push(value);
        return;
      }
    }
    this.keyMap[hashedKey].push(item);
    this.keys.push(key);
    this.values.push(value);
  }

  get(key) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) return undefined;
    for(let item of this.keyMap[hashedKey]) {
      if (item.key === key) return item.value;
    }
    return undefined;
  }

  getKeys() {
    return this.keys;
  }

  getValues() {
    return this.values;
  }
}

const hashTableTest = new HashTable();

hashTableTest.set('pink', '11122');
hashTableTest.set('black', '11111');
hashTableTest.set('pink', '11123');

console.log('pink', hashTableTest.get('pink'))
console.log('clay', hashTableTest.get('clay'))
console.log('black', hashTableTest.get('black'))

console.log('keys', hashTableTest.getKeys())
console.log('values', hashTableTest.getValues())

const LL = require('./linkedlist.js');
class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  add(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LL();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll;
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }
  contains(key){
    const keys= Object.keys(this.storage);
    if(keys.includes(key)){
      return true;
    }else {
      return false;
    }
  }
  get(key){
    if(this.contains(key)){
      const keys= Object.keys(this.storage);
      keys.forEach(stored=>{
        if(stored===key){
          return this.storage[stored];
        }
      })
    }
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }
}

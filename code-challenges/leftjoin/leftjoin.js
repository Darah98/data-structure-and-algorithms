'use strict';

function leftJoin(hashmap1, hashmap2){
  let result = [];
  for (let j = 0; j < hashmap1.storage.length; j++){
    if (hashmap1.storage[j] && hashmap2.storage[j]){
      const obj1 = hashmap1.storage[j].head.value;
      const objKey1 = Object.keys(obj1)[0]
      const objValue1 = Object.values(obj1)[0]
      const obj2 = hashmap2.storage[j].head.value;
      const objValue2 = Object.values(obj2)[0]
      let resultObj = {
        word: objKey1,
        synonym: objValue1,
        antonym: objValue2
      }
      result.push(resultObj);
    }else if(hashmap1.storage[j] && !hashmap2.storage[j]) {
      const obj = hashmap1.storage[j].head.value;
      const objKey = Object.keys(obj)[0]
      const objValue = Object.values(obj)[0]
      let resultObj = {
        word: objKey,
        synonym: objValue,
        antonym: null
      }
      result.push(resultObj);
    }
  }
  console.log(result);
  return result;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}
class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; 
  }
  set(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll;
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }
}

const hashmap1 = new Hashmap(4000);
hashmap1.set('fond', 'enamored');
hashmap1.set('wrath', 'anger');
hashmap1.set('diligent', 'employed');
hashmap1.set('outfit', 'garb');
hashmap1.set('guide', 'usher');

const hashmap2 = new Hashmap(4000); 
hashmap2.set('fond', 'averse');
hashmap2.set('wrath', 'delight');
hashmap2.set('diligent', 'idle');
hashmap2.set('guide', 'follow');
hashmap2.set('flow', 'jam');

const obj = hashmap1.storage[37].head.value;
const objkeys = Object.keys(obj)[0]

leftJoin(hashmap1, hashmap2);

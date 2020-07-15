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
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
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
      count= count +1;
      return value;
    }
  }
}
let count= 0;
function repeatedWord(str){
  const hashmap = new Hashmap(4000);
  const arr = str.toLowerCase().replace(/,/g,'').split(' ');
  for(let i=0; i<arr.length; i++){
    const repeatedVal= hashmap.set(arr[i], arr[i]);
    if(count >0){
      return repeatedVal;
      break;
    }
  }
}
repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York');

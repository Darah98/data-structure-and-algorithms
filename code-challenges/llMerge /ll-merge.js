'use strict';
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
  insert(value) {
    try {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    } catch (err) {
      console.error(err);
    }
  }
  includes(value) {
    try {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } catch (err) {
      console.error(err);
    }
  }
  toString() {
    try {
      let currentNode = this.head;
      let strVal = '';
      while (currentNode) {
        strVal = strVal + `{${currentNode.value}} -> `;
        currentNode = currentNode.next;
      }
      console.log(strVal, currentNode);
    } catch (err) {
      console.error(err);
    }
  }
  append(value) {
    const node = new Node(value);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    if (currentNode.next.value === value) {
      node.next = currentNode;
    }
    return this;
  }
  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    if (currentNode.value === value) {
      node.next = currentNode.next;
      currentNode.next = node;
    }
    return this;
  }
  kthFromEnd(k) {
    let newArr = [];
    let currentNode = this.head;
    while (currentNode) {
      newArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    newArr.reverse();
    if (k > newArr.length || k < 0) {
      return 'Number not in the list';
    } else {
      for (let i = 0; i < newArr.length; i++) {
        if (k === i) {
          return newArr[i];
        }
      }
    }
  }
}
const list1 = new LinkedList();
const list2 = new LinkedList();

list1.insert('1');
list1.append('2');
list1.append('3');
list2.insert('4');
list2.append('5');
list2.append('6');
list1.toString();
list2.toString();

function mergeLists(ll1, ll2) {
  let resList = ll1;
  let current1 = ll1.head;
  let current2 = ll2.head;
  let current3 = current1;

  while (current3.next) {
    if (ll1.includes(current3.value)) {
      resList.insertAfter(current3.value, current2.value);
      // resList.toString();
      // current1= current1.next;
      current2 = current2.next;
      current3 = current3.next;
    } else if (ll2.includes(current.value)) {
      resList.insertAfter(current3.value, current1.value);
      // resList.toString();
      current1 = current1.next;
      // current2=current2.next;
      current3 = current3.next;
    }
    // current3=current3.next;
  }
  resList.toString();
}
mergeLists(list1, list2);

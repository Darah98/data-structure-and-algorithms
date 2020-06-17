class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    const result = [];
    const traverseThru = (node) => {
      result.push(node.value);
      if (node.left) traverseThru(node.left);
      if (node.right) traverseThru(node.right);
    }
    traverseThru(this.root);
    return result;
  }
  inOrder() {
    const result = [];
    const traverseThru = (node) => {
      if (node.left) traverseThru(node.left);
      result.push(node.value);
      if (node.right) traverseThru(node.right);
    }
    traverseThru(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const traverseThru = (node) => {
      if (node.left) traverseThru(node.left);
      if (node.right) traverseThru(node.right);
      result.push(node.value);
    }
    traverseThru(this.root);
    return result;
  }
  breadthFirst(tree) {
    if (!tree.root) {
      return [];
    }
    const valsList = [];
    const queue = [];
    queue.push(tree.root);
    while(queue.length){
      const line= [];
      const breadth= queue.length;
      for(let i=0; i<breadth; i++){
        const node= queue.shift();
        line.push(node.value);
        if(node.left){
          queue.push(node.left);
        }
        if(node.right){
          queue.push(node.right);
        }
        valsList.push(line);
      }
    }
    return valsList;
  }
}
class BinarySearchTree {
  constructor() { }
  add(value) {
    const node = new Node(value);
    const tree = new BinaryTree(node)
    if (!tree.root) {
      tree.root = node;
    }
    let current = tree.root;
    while (current.left || current.right) {
      current = current.left ? current.left : current.right;
    }
    current.left = node;
  }
  contains(value) {
    const tree = new BinaryTree();
    const result = tree.preOrder();
    if (result.includes(value)) true;
    false;
  }
}

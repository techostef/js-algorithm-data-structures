class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let directionRoot = 'left'
    if (value >= this.root.val) {
      directionRoot = 'right';
    }

    if (!this.root[directionRoot]) {
      this.root[directionRoot] = node;
      return;
    }

    let directionChildren = 'left';
    let current = this.root[directionRoot];
    while(current) {
      if (value >= current.val) {
        directionChildren = 'right';
      } 
      if (!current[directionChildren]) {
        current[directionChildren] = node;
        break
      } else {
        current = current[directionChildren]
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    } else if (this.root.val === value) {
      return true;
    }
    let directionRoot = 'left'
    if (value >= this.root.val) {
      directionRoot = 'right';
    }

    if (!this.root[directionRoot]) {
      return false;
    } else if (this.root[directionRoot] === value) {
      return true;
    }

    let directionChildren = 'left';
    let current = this.root[directionRoot];
    while(current) {
      if (value > current.val) {
        directionChildren = 'right';
      } else if (current.val === value) {
        return true;
      }
      if (!current[directionChildren]) {
        return false;
      } else {
        current = current[directionChildren]
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(8)
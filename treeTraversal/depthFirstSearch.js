class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class DepthFirstSearch {
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

  dfsPreOrder() {
    let visited = [];
    
    function traverse(node) {
      if (node.val) {
        visited.push(node.val);
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      if (node.val) {
        visited.push(node.val);
      }
    }

    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    let visited = [];
    
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.val) {
        visited.push(node.val);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }
}


let tree = new DepthFirstSearch();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(20);
tree.insert(3);
tree.insert(8);

console.log('visited dfsPreOrder', tree.dfsPreOrder());
console.log('visited dfsPostOrder', tree.dfsPostOrder());
console.log('visited dfsInOrder', tree.dfsInOrder());
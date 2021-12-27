class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BreadthFirstSearch {
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

  bfs() {
    let node = this.root;
    let queue = [];
    let visited = []; 
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      visited.push(node.val);
    }
    return visited;
  }
}


let tree = new BreadthFirstSearch();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(20);
tree.insert(3);
tree.insert(8);

console.log('search', tree.bfs());
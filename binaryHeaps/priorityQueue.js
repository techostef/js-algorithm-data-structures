/*
  min value is most priority
*/
class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.value = [];
    this.children = 2;
  }
  // 2n + 1 children
  // (n-1)/2 parent
  enqueue(value, priority = 0) {
    const item = new Node(value, priority)
    this.value.push(item);
    let index = this.value.length - 1;
    while(true) {
      const parent = Math.floor((index - 1) / this.children)
      const temp = this.value[parent];
      if (parent >= 0 && temp.priority > priority) {
        this.value[index] = temp;
        this.value[parent] = item;
        index = parent;
      } else {
        break
      }
    }
  }

  dequeue() {
    let currentValue = this.value.pop();
    this.value[0] = currentValue;
    let index = 0;
    while(true) {
      const childrenIndex = this.children * index  + 1
      const childrenValue1 = this.value[childrenIndex];
      const childrenValue2 = this.value[childrenIndex + 1];
      let largestIndexValue = -1;
      if (childrenValue1?.priority < currentValue?.priority && childrenValue2?.priority < currentValue?.priority) {
        if (childrenValue1.priority <= childrenValue2.priority) {
          largestIndexValue = childrenIndex;
        } else {
          largestIndexValue = childrenIndex + 1;
        }
      } else {
        if (childrenValue1?.priority <= currentValue?.priority) {
          largestIndexValue = childrenIndex;
        } else if (childrenValue2?.priority < currentValue?.priority) {
          largestIndexValue = childrenIndex + 1;
        }
      }

      if (largestIndexValue >= 0) {
        const temp = this.value[largestIndexValue];
        this.value[largestIndexValue] = this.value[index];
        this.value[index] = temp;

        index = largestIndexValue;
      } else {
        break;
      }
    }

  }
}

let tree = new PriorityQueue();
// tree.insert(41);
// tree.insert(39);
// tree.insert(33);
// tree.insert(18);
// tree.insert(27);
// tree.insert(12);
// tree.insert(55);

tree.enqueue('walk dog', 2);
tree.enqueue('go out', 3);
tree.enqueue('sleep', 1);

tree.dequeue();

console.log('tree', tree.value)
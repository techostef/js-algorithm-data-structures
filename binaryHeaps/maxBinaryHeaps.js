class MaxBinaryHeaps {
  constructor() {
    this.value = [];
    this.children = 2;
  }
  // 2n + 1 children
  // (n-1)/2 parent
  insert(value) {
    this.value.push(value);
    let index = this.value.length - 1;
    while(true) {
      const parent = Math.floor((index - 1) / this.children)
      const temp = this.value[parent];
      if (parent >= 0 && temp < value) {
        this.value[index] = temp;
        this.value[parent] = value;
        index = parent;
      } else {
        break
      }
    }
  }

  extractMax() {
    let currentValue = this.value.pop();
    this.value[0] = currentValue;
    let index = 0;
    while(true) {
      const childrenIndex = this.children * index  + 1
      const childrenValue1 = this.value[childrenIndex];
      const childrenValue2 = this.value[childrenIndex + 1];
      let largestIndexValue = -1;
      if (childrenValue1 > currentValue && childrenValue2 > currentValue) {
        if (childrenValue1 >= childrenValue2) {
          largestIndexValue = childrenIndex;
        } else {
          largestIndexValue = childrenIndex + 1;
        }
      } else {
        if (childrenValue1 >= currentValue) {
          largestIndexValue = childrenIndex;
        } else if (childrenValue2 > currentValue) {
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

let tree = new MaxBinaryHeaps();
// tree.insert(41);
// tree.insert(39);
// tree.insert(33);
// tree.insert(18);
// tree.insert(27);
// tree.insert(12);
// tree.insert(55);

tree.insert(70);
tree.insert(67);
tree.insert(65);
tree.insert(45);
tree.insert(58);
tree.insert(40);
tree.insert(53);
tree.insert(44);
tree.insert(15);
tree.insert(31);

tree.extractMax();

console.log('tree', tree.value)
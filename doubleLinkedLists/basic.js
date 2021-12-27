class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class SinglyLinkedLists{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;

    } else {
      newNode.prev = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (this.tail.prev === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = null;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.length -= 1;

    
    // console.log('this.head', this.head)
    // console.log('this.tail', this.tail)
  }

  shift() {
    if (this.head) {
      this.head = this.head.next;
      this.head.prev = null
      this.length -= 1;
    }
  }

  unshift(val) {
    const newNode = new Node(val);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  get(index = 0) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    let middle = Math.floor(this.length / 2);
    let direction = 'next';
    if (index >= middle) {
      i = middle;
      current = this.tail
      direction = 'prev';
    }
    while(i < this.length) {
      if(i === index) {
        return current;
      }
      current = current?.[direction];
      i++;
    }
  }

  set(index = 0, value) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    let middle = Math.floor(this.length / 2);
    let direction = 'next';
    if (index >= middle) {
      i = middle;
      current = this.tail
      direction = 'prev';
    }
    while(i < this.length) {
      if(i === index) {
        current.val = value
        break;
      }
      current = current?.[direction];
      i++;
    }
  }

  insert(index = 0, val) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    const newNode = new Node(val);
    let middle = Math.floor(this.length / 2);
    let direction = 'next';
    if (index >= middle) {
      i = middle;
      current = this.tail
      direction = 'prev';
    }
    while(i < this.length) {
      if(i === index) {
        newNode.next = current.next;
        current.next = newNode;
        this.length += 1;
        break;
      }
      current = current?.[direction];
      i++;
    }
  }

  remove(index = 0) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    let middle = Math.floor(this.length / 2);
    let direction = 'next';
    if (index >= middle) {
      i = middle;
      current = this.tail
      direction = 'prev';
    }
    while(i < this.length) {
      if(i === index) {
        if (current?.next?.next) {
          current.next = current.next.next;
          current.next.prev = current
          this.length -= 1;
          break;
        } else if (current.next) {
          current.next = null;
          this.length -= 1;
          break;
        }
        break;
      }
      current = current?.[direction];
      i++;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i ++) {
      next = node.next
      node.next = prev;
      prev = node;
      node = next;
    }
    
  }

  toText() {
    let text = '';
    let current = this.head;
    while(current) {
      text += ` ${current.val}`;
      current = current?.next;
    }
    console.log('text: ', text);
  }

  toTextReverse() {
    let text = '';
    let current = this.tail;
    while(current) {
      text += ` ${current.val}`;
      current = current?.prev;
    }
    console.log('text: ', text);
  }
}

var list = new SinglyLinkedLists();
list.push('oky');
list.push('dwi');
list.push('hartanto');
list.push('other');

list.unshift('hey');
// list.shift();

// list.pop();

// list.set(0, 'hy!');
list.set(1, 'dwi!');

list.remove(1);

// list.insert(1, 'and');
// list.insert(3, 'not');

// list.reverse();

// console.log(list.get(1));
// console.log(list.get(3));

// list.shift();
// list.shift();
// list.shift();
// list.shift();

list.toText();
list.toTextReverse();
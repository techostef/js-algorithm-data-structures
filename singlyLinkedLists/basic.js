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
      this.length -= 1;
    }
  }

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  get(index = 0) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    while(i < this.length) {
      if(i === index) {
        return current;
      }
      current = current?.next;
      i++;
    }
  }

  set(index = 0, value) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    while(i < this.length) {
      if(i === index) {
        current.val = value
        break;
      }
      current = current?.next;
      i++;
    }
  }

  insert(index = 0, val) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    const newNode = new Node(val);
    while(i < this.length) {
      if(i === index) {
        newNode.next = current.next;
        current.next = newNode;
        this.length += 1;
        break;
      }
      current = current?.next;
      i++;
    }
  }

  remove(index = 0) {
    if (index > this.length || index < 0) return null;
    let current = this.head;
    let i = 0;
    while(i < this.length) {
      if(i === index) {
        if (current?.next?.next) {
          current.next = current.next.next;
          this.length -= 1;
          break;
        } else if (current.next) {
          current.next = null;
          this.length -= 1;
          break;
        }
        break;
      }
      current = current?.next;
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
      console.log('next', next?.val)
      node.next = prev;
      console.log('node.next', node?.next)
      prev = node;
      console.log('prev', prev?.val)
      node = next;
      console.log('node', node?.val)
      console.log('---------------------------')
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
}

var list = new SinglyLinkedLists();
list.push('oky');
list.push('dwi');
list.push('hartanto');

list.unshift('hey');

// list.set(0, 'hy!');
// list.set(2, 'dwi!');

// list.insert(1, 'and');
// list.insert(3, 'not');

list.reverse();

// console.log(list.get(1));
// console.log(list.get(3));

// list.shift();
// list.shift();
// list.shift();
// list.shift();

list.toText();
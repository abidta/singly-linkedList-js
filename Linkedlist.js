class LinkedList {
  head = null;
  tail = null;
  addNode(data) {
    let newnode = new Node(data);

    if (this.head == null) {
      this.head = newnode;
    } else {
      this.tail.next = newnode;
    }
    this.tail = newnode;
  }
  deleteNode(data) {
    let temp = this.head;
    let prev = null;

    if (temp != null && temp.data == data) {
      this.head = temp.next;
      return;
    }
    while (temp != null && temp.data != data) {
      prev = temp;
      temp = temp.next;
    }
    if (temp == null) {
      return;
    }
    if (temp == this.tail) {
      this.tail = prev;
      this.tail.next = null;
      return;
    }
    prev.next = temp.next;
  }
  insert(data, nextTo,cb) {
    let newnode = new Node(data);
    let temp = this.head;
    if (nextTo) {
      while (temp != null && temp.data != nextTo) {
        temp = temp.next;
      }
    }

    if (temp == null) {
      typeof cb === 'function'&& cb({message:`your target element not found`})
      return
      }
    if (temp == this.tail || !nextTo) {
      this.tail.next = newnode;
      this.tail = newnode;
      return;
    }
    newnode.next = temp.next;
    temp.next = newnode;
  }
  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.insert(100,20,cb=>{
  console.log(cb);
})
list.display()

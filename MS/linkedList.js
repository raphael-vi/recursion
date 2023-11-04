let head = null;
let tail = null;
let size = 0;

class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

function append(data) {
  let newNode = new Node(data);
  if (!head) {
    head = newNode;
  } else {
    tail.next = newNode;
    newNode.previous = tail;
  }
  size ++
  tail = newNode;
}

function prepend(data){
  let newNode = new Node(data);
  let prevHead = head;
  if(head){
    head = newNode;
    newNode.next  = prevHead;
    prevHead.previous = head;  
  }
  size ++
}

function at(index){
  let i = 0
  let node = head;
  if(index < 0){
    i = -1
    node = tail;
    while (i != index){
      node = node.previous
      i--

    }  
  }
  while (i != index){
    node = node.next
    i++
  }
  if(node === null){
    return "Index larger than the size of the list";
  }
  return node;
}

function popNode(){
  tail.previous.next = null;
  tail = tail.previous
}

function contains(data) {
  let n = head;
  let index = 0;
  while (n !== null) {
    if (n.data === data){
      console.log('true', n.data, "at", index)
      return true;
    }
    index ++
    n = n.next;
  
  }
}

function printList() {
  let n = head;
  
  while (n !== null) {
  
    console.log(`(${n.data}) -> (${n.next? n.next.data : null})`)
    

    n = n.next;
  
  }
}


append(4);
append(4);
append(2);
append(3);
prepend(5)

printList()


contains(3);

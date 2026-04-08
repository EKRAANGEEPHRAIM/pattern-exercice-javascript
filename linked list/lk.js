// reverse a linked list 

class ListNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }



}

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);

a.next = b;
b.next = c


const newHead = reverseList(a);
console.log(newHead)
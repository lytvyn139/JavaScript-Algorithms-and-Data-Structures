/*
    WHAT IS A STACK?
- A LIFO data structure!
- The last element added to the stack will be the first element removed from the stack


    WHERE STACKS ARE USED
- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!


    BIG O
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
console.log(stack);
stack.pop();
console.log(stack);

/*
    WHAT IS A QUEUE?
- FIFO  First In First Out
- The last element added to the stack will be the first element removed from the stack

    WHERE STACKS ARE USED
- Background tasks
- Uploading resources
- Printing / Task processing

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

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) { //add to the end
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() { //remove from start
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
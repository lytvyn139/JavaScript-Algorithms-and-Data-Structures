//https://visualgo.net/en/list

/* 
Big O
Insertion - O(1)
Removal - O(1)
Searching - O(n) -> technically is O(n/2), but that still O(n)
Access - O(n)

*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 

    pop() {
        if(this.length === 0) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() { //remove head
        if(this.length === 0) return false ;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) { //add head
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return false;
        var count, current;
        
        if(index <= this.length/2){
            console.log('working from start:')
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            console.log('working from end:')
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode; 
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift(); //remove from start
        if(index === this.length - 1) return this.pop(); //remove from end

        var removedNode = this.get(index);
        //remove C
        //A B C D E F
        removedNode.prev.next = removedNode.next;  //B to D
        removedNode.prev.prev = removedNode.prev;  //D to B
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new DoublyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.push("E");
list.print();
list.remove(2);
list.print();


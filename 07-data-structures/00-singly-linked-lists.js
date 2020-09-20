//https://visualgo.net/en/list

/* 
Big O
Insertion - O(1)
Removal - it depends... O(1) or O(n)
Searching - O(n)
Access - O(n)

*/

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    ////////////////////////////////////////////////////////////////////

    //PUSH
    push(val){
        const newNode = new Node(val);
        if(!this.head) { //if no head
            this.head = newNode;
            this.tail = this.head; //head and tail are the same
        } else {
        //set the next property on the tail to be the new node 
        //and set the tail property on the list to be the newly created node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    ////////////////////////////////////////////////////////////////////

    //TRAVERSE
    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
    ////////////////////////////////////////////////////////////////////

    //POP (remove tail)
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = this.head;
        while(current.next){ //while there's something keep going
            newTail = current; //newTail is always one step behind
            current = current.next;
            console.log(`current: ${current.val} | new tail: ${newTail.val} `)
        }
        this.tail = newTail; 
        this.tail.next = null;
        this.length--;
        
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    ////////////////////////////////////////////////////////////////////

    //SHIFT (remove head)
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    ////////////////////////////////////////////////////////////////////

    //UNSHIFT (add head)
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) { //if no head
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;        
    }
    ////////////////////////////////////////////////////////////////////    

    //GET ELEMENT
    get(index){
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    ////////////////////////////////////////////////////////////////////  
    
    //SET ELEMENT
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    ////////////////////////////////////////////////////////////////////

    //INSERT based on push-unshift-get
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val); //add to end
        if(index === 0) return !!this.unshift(val); //add to begining

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    ////////////////////////////////////////////////////////////////////

    //REMOVE based on pop shift methods
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    ////////////////////////////////////////////////////////////////////

    //REVERSE
    reverse(){
        var node = this.head; //tmp var
        this.head = this.tail;
        this.tail = node;

        var next = null;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
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

    //PUSH
let list = new SinglyLinkedList();
list.push(42);
list.push(19);
list.push(16);
list.push(515);
//console.log(list);

    //TRAVERSE
// let list = new SinglyLinkedList();
// console.log(list.push("ARE").push("YOU").push("TAIL"));
// console.log(list.traverse());

    //POP
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list);
    
    //SHIFT
// list.shift();
// console.log(list);

    //UNSHIFT
// list.unshift('1st');
// console.log(list);

    //GET
// console.log(list.get(3));

    //SET
// list.set(1, "-= 000 =-");
// console.log(list);

    //INSERT
// list.insert(3, "#111");
// console.log(list);

    //REMOVE
// list.remove(3);
// console.log(list);

    //REVERSE
list.print();
list.reverse();
list.print();


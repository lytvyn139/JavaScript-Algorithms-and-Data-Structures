/* 
https://visualgo.net/en/bst?slide=1
    TREE TERMINOLOGY:
Root - The top node in a tree.
Child -A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child.
Siblings -A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.

    USE CASES:
- HTML DOM
- Network Routing
- Abstract Syntax Tree (if/elf)
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems
    
    HOW BSTS WORK:
- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent
                84
            /       \
         81          93
       /  \         /
     69    83     91
                 /
                90

Time complexity in big O notation
Algorithm		Average	Worst case
Space	    	O(n)	O(n)
Search		    O(log n)	O(n)
Insert		    O(log n)	O(n)
Delete		    O(log n)	O(n)
*/


/* 
BREADTH FIRST SEARCH 
------>        10
              /  \
------>      6   15
           / \     \
------>   3   8     20
[10,6,5,3,8,20]

- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
- Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
- If there is a left property on the node dequeued - add it to the queue
- If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values
queue: [10]
visited: [10]
is'there left ? yes
*/

/* 
DEPTH FIRST SEARCH DFSPreOrder
               10
              /  \
             6   15
           / \     \
         3   8     20

[10, 3, 6, 8, 15, 20]     
we start at root and check left side then right side

DEPTH FIRST SEARCH DFSPostOrder
               10
              /  \
             6   15
           / \     \
         3   8     20

[3, 8, 6, 20, 15, 10]
we started at ten but not visiting 10, we check left, we check right,
and then 10. root is the last thing visiited.



DEPTH FIRST SEARCH DFSInOrder
               10
              /  \
             6   15
           / \     \
         3   8     20

[3, 8, 6, 10, 15, 20]
we started on left bottom and go up till root, then we start right bottom and go up
*/
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){ //while we have a current and didn't find value, current = null / loop stop
            if(value < current.value){
                current = current.left; //proceed to left
            } else if(value > current.value){
                current = current.right; //proceed to right
            } else {
                found = true; //loop is done
            }
        }
        if(!found) return undefined;
        return current; //returning node
    }

    contains(value) {
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }


    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}
var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);
tree.root.right = new Node(15);
tree.root.right.right = new Node(20);

//console.log(tree)
console.log(tree.find(7));
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
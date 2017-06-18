/**
 * Created by Juan Biscaia on 16/06/17.
 */

/**
 * Creates a new LinkedList to be implemented
 * @constructor
 */
function LinkedList(){
    this.head = null;
    this.tail = null;
}

/**
 * Creates a new node to be added to the linked list
 * @param value (integer) the value to be stored in the node
 * @param next (object) the next object for the new node
 * @param prev (object) the previous object for the new node
 * @constructor
 */
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

/**
 * Prototype function from the Linked List
 * used to add a new head to the list.
 * @param value (integer) the value to store in the node
 */
LinkedList.prototype.addToHead = function(value){
    /**
     * Creates the new node to be the head.
     * #1 Sets the value from the passed param.
     * #2 Sets the node next reference as the current head, bc this node will soon become the new head,
     * and the current head will be moved one node down
     * #3 Sets the previous node as null, bc this is the head, there is nothing before it
     */
    var newNode = new Node(value, this.head, null);
    /**
     * If the Linked List already have a head node, it means the list is not empty,
     * so sets the previous node for the current head as the new node.
     */
    if(this.head){
        this.head.prev = newNode;
    } else {
        // but, if the Linked List is empty, the new node will be both the head and tail.
        this.tail = newNode
    }
    /**
     * Sets the new node as the current head
     */
    this.head = newNode;
};

/**
 * Prototype function from the Linked List
 * used add a new tail to the list.
 * @param value (integer) the value to store in the node
 */
LinkedList.prototype.addToTail = function(value){
    /**
     * Creates the new node to be the tail.
     * #1 Sets the value from the passed param.
     * #2 Sets the node next reference as null, since the new node will be the tail, and there is nothing after it.
     * #3 Sets the node prev reference as the current tail, bc the current tail will be one node up.
     */
    var newNode = new Node(value, null, this.tail);
    /**
     * If the Linked List already have a tail node, it means the list is not empty,
     * so sets the next reference for the current tail as the new node.
     */
    if(this.tail){
        this.tail.next = newNode;
    } else {
        // but if the Linked List is empty, the new node will be both the head and tail
        this.head = newNode
    }
    /**
     * Sets the new node as the current tail
     */
    this.tail = newNode;
};

/**
 * Remove the head from the Linked List
 * @returns {*} the value of the removed head
 */
LinkedList.prototype.removeHead = function(){
    // if the head is empty, there is nothing to be removed, returns null
    if(!this.head) return null;

    // save the value of the head node in a variable,
    // to be returned later on
    var val = this.head.value;

    // remove the head node, by setting the new head
    // to be the next node from the current head node
    this.head = this.head.next;

    // if there is a head node after removing the previous node,
    // sets the new head "previous" node to null
    if(this.head) {
        this.head.prev = null;
    } else {
        // if after setting the new head, the head still null, removes the tail
        // because it means that there is no head anymore, so no tail must exists
        this.tail = null;
    }

    return val;
};
const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {      // Adds node to the end of the list
        if (this._head == null) {
            this._head = new Node (data);
            this._tail = this._head;
            this.length++;
        } else {
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
            this.length++;
        }
        return this;
    }

    head() {            // Returns data from the head of the list
        return this._head ? this._head.data : null;
    }

    tail() {            // Returns data from the end of the list
        return this._tail ? this._tail.data : null;
    }

    at(index) {         // Returns data of node by specified index
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp.data;
    }

    insertAt(index, data) {     // Inserts data to specified index
        if (this._head == null) {
            this.append(data);
            return this;
        } else {
            let temp = this._head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            let node = new Node(data, temp.prev, temp);
            temp.prev.next = node;
            temp.prev = node;
            return this;
        }
    }

    isEmpty() {         // Returns true if list is empty, false otherwise
        return this._head == null;
    }

    clear() {           // Clears the list
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {   // Deletes element by specified index
        if (index == 0) {
            if (this.length == 1) {
                this.clear();
                return this;
            }
            this._head = this._head.next;
            this._head.prev = null;
            return this;
        }
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        this.length--;
        return this;
    }

    reverse() {         // Reverses the list
        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        while (temp != null) {
            let swap = temp.prev;
            temp.prev = temp.next;
            temp.next = swap;
            temp = temp.prev;
        }
        return this;
    }

    indexOf(data) {     // Returns index of specified value or -1 if list doesn't contain such
        let temp = this._head;
        let index = 0;
        while (temp != null) {
            if (temp.data == data) {
                return index;
            } else {
                temp = temp.next;
                index++;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;

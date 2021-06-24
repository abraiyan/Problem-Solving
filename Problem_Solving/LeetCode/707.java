class Node {
    public int value;
    public Node next;

    public Node(int value) {
        this.value = value;
    }
}

class MyLinkedList {

    private Node head;
    private Node tail;
    private int size;

    public MyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = -1;
    }

    public void print() {
        Node temp = head;
        System.out.print("STATRT -> ");

        while (temp != null) {
            System.out.print(temp.value + " -> ");
            temp = temp.next;
        }

        System.out.println("NULL");
    }

    /**
     * Get the value of the index-th node in the linked list. If the index is
     * invalid, return -1.
     */
    public int get(int index) {
        if (index > size)
            return -1;
        int counter = 0;
        Node temp = head;

        while (temp != null) {
            if (counter == index)
                return temp.value;
            temp = temp.next;
            counter++;
        }

        return -1;
    }

    /**
     * Add a node of value val before the first element of the linked list. After
     * the insertion, the new node will be the first node of the linked list.
     */
    public void addAtHead(int val) {
        Node node = new Node(val);
        if (head == null) {
            head = node;
            tail = head;
        } else {
            node.next = head;
            head = node;
        }
        size++;
    }

    /** Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        Node node = new Node(val);
        if (tail == null) {
            tail = node;
            head = tail;
        } else {
            tail.next = node;
            tail = node;
        }
        size++;
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index
     * equals to the length of linked list, the node will be appended to the end of
     * linked list. If index is greater than the length, the node will not be
     * inserted.
     */
    public void addAtIndex(int index, int val) {
        if (index > size + 1)
            return;
        if (index == 0) {
            addAtHead(val);
            return;
        }
        if (index == (size + 1)) {
            addAtTail(val);
            return;
        }

        int counter = 1;
        Node previous = head;
        Node current = head.next;
        Node newNode = new Node(val);

        while (current != null) {
            if (counter == index) {
                previous.next = newNode;
                newNode.next = current;
                size++;
                break;
            }

            counter++;
            previous = current;
            current = current.next;
        }
    }

    public void deleteFromFront() {
        Node node = head;
        head = head.next;
        node.next = null;
        if (head == null)
            tail = null;
        size--;
    }

    public void deleteFromBack() {
        Node temp = head;
        while (temp.next.next != null) {
            temp = temp.next;
        }

        temp.next = null;
        tail = temp;
        size--;
    }

    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        if (index > size)
            return;
        if (index == 0) {
            deleteFromFront();
            return;
        }
        if (size == index) {
            deleteFromBack();
            return;
        }

        int counter = 1;
        Node previous = head;
        Node current = head.next;

        while (current != null) {
            if (counter == index) {
                previous.next = current.next;
                current.next = null;
                size--;
                return;
            }

            previous = current;
            current = current.next;
            counter++;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList(); int param_1 = obj.get(index);
 * obj.addAtHead(val); obj.addAtTail(val); obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
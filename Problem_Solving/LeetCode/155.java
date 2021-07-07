class Node {
    public Node next;
    public int value;
    public int minValue;

    public Node(int value, int minValue, Node next) {
        this.value = value;
        this.minValue = minValue;
        this.next = next;
    }
}

class MinStack {

    public Node head;

    public MinStack() {
        head = null;
    }

    public void push(int val) {
        if (head == null) {
            head = new Node(val, val, null);
        } else {
            Node current = head;
            head = new Node(val, Math.min(val, current.minValue), current);
        }
    }

    public void pop() {
        head = head.next;
    }

    public int top() {
        return head.value;
    }

    public int getMin() {
        return head.minValue;
    }
}

/**
 * Your MinStack object will be instantiated and called as such: MinStack obj =
 * new MinStack(); obj.push(val); obj.pop(); int param_3 = obj.top(); int
 * param_4 = obj.getMin();
 */
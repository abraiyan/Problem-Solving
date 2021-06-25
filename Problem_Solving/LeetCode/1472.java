class Node {
    public String value;
    public Node next;
    public Node previous;
    
    public Node(String value) {
        this.value = value;
    }
}

class BrowserHistory {
    
    private Node head;
    private Node current;

    public BrowserHistory(String homepage) {
        this.head = new Node(homepage);
        current = head;
    }
    
    public void visit(String url) {
        Node node = new Node(url);
        current.next = node;
        node.previous = current;
        node.next = null;
        current = node;
    }
    
    public String back(int steps) {
        Node temp = current;
        String lastVisit = "";
        while(steps != 0) {
            lastVisit = temp.value;
            temp = temp.previous;
            current = (temp != null) ? temp : current;
            steps--;
            if(temp == null) return lastVisit;
        }
        
        current = temp;
        return temp.value;
    }
    
    public String forward(int steps) {
        Node temp = current;
        String lastVisit = "";
        int counter = 0;
        while(counter != steps) {
            lastVisit = temp.value;
            temp = temp.next;
            current = (temp != null) ? temp : current;
            counter++;
            if(temp == null) return lastVisit;
        }
        
        current = temp;
        return temp.value;        
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory obj = new BrowserHistory(homepage);
 * obj.visit(url);
 * String param_2 = obj.back(steps);
 * String param_3 = obj.forward(steps);
 */
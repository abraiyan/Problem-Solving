class RecentCounter {
    
    LinkedList<Integer> list;

    public RecentCounter() {
        list = new LinkedList<Integer>();
    }
    
    public int ping(int t) {
        list.addLast(t);
        
        while(list.getFirst() < t - 3000) {
            list.removeFirst();
        }
        
        return list.size();
    }
}
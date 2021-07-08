import java.util.ArrayList;

class CustomStack {

    ArrayList<Integer> arrayList;
    int maxSize;

    public CustomStack(int maxSize) {
        this.maxSize = maxSize;
        arrayList = new ArrayList<>();
    }

    public void push(int x) {
        if (arrayList.size() < maxSize) {
            arrayList.add(x);
        }
    }

    public int pop() {
        if (arrayList.isEmpty())
            return -1;
        else
            return arrayList.remove(arrayList.size() - 1);
    }

    public void increment(int k, int val) {
        for (int i = 0; i < k; i++) {
            if (i >= arrayList.size())
                break;
            arrayList.set(i, arrayList.get(i) + val);
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such: CustomStack
 * obj = new CustomStack(maxSize); obj.push(x); int param_2 = obj.pop();
 * obj.increment(k,val);
 */
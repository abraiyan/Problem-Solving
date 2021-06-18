var removeZeroSumSublists = function(head) {
    let newNode = new ListNode(0)
    newNode.next = head
    let prefixSum = 0
    let map = new Map()
    map.set(prefixSum, newNode)
    
    for(let i = newNode; i !== null; i = i.next) {
        prefixSum += i.val
        map.set(prefixSum, i)
    }
    
    prefixSum = 0
    
    for(let i = newNode; i !== null; i = i.next) {
        prefixSum += i.val
        i.next = map.get(prefixSum).next
    }
    
    return newNode.next
};
var numComponents = function(head, nums) {
    let output = 0
    let set = new Set(nums)
    
    while(head !== null) {
        if(set.has(head.val) && (head.next === null || !set.has(head.next.val))) {
            output++
        }
        
        head = head.next
    }
    
    return output
};
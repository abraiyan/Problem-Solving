

var matrixReshape = function (nu ms, r, c) {
    const currentRow = nums[0].length
    const currentColumn = nums.length
  
    if(r * c !== currentRow * currentColumn) {
      console.log('Honto')
      return nums
    }
  
    let tempArray = []
    let output = []
  
    for(let i = 0; i < nums.length; i++) {
      for(let j = 0; j < nums[0].length; j++) {
        tempArray.push(nums[i][j])
      }
    }
  
    for(let i = 0; i < r; i++) {
      let temp = []
      for(let j = 0; j < c; j++) {
        temp.push(tempArray.shift())
      }
      output.push(temp)
    }
  
    return output
  };
var minCostToMoveChips = function (position) {
  let odd = 0
  let even = 0

  for (let n of position) {
    if (n % 2 === 0) even++
    else odd++
  }

  return odd < even ? odd : even
}

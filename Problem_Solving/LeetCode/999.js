/*
    Problem: Available Captures for Rook (https://leetcode.com/problems/available-captures-for-rook/)
*/

var numRookCaptures = function (board) {
  let output = 0

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        //left search
        for (let l = j - 1; l >= 0; l--) {
          if (board[i][l] === 'p') {
            output++
            break
          }

          if (board[i][l] === 'B') {
            break
          }
        }
        //right search
        for (let r = j + 1; r < 8; r++) {
          if (board[i][r] === 'p') {
            output++
            break
          }

          if (board[i][r] === 'B') {
            break
          }
        }
        //top search
        for (let t = i - 1; t >= 0; t--) {
          if (board[t][j] === 'p') {
            output++
            break
          }

          if (board[t][j] === 'B') {
            break
          }
        }
        //bottom search
        for (let b = i + 1; b < 8; b++) {
          if (board[b][j] === 'p') {
            output++
            break
          }

          if (board[b][j] === 'B') {
            break
          }
        }
        return output
      }
    }
  }

  return output
}

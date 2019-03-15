// 37 hard Backtracking

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  var canSet = function(row, col, k) {
    // 行
    if (board[row].indexOf(k+'') > -1) return false
    // 列
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === k+'') return false
    }
    // 方格
    for (let i = row - (row%3) ; i < row - (row%3) + 3; i++) {
      for (let j = col - (col%3); j < col - (col%3) + 3; j++) {
        if (board[i][j] === k+'') return false
      }
    }
    return true
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === '.') {
        for (let k = 1; k <= 9; k++) {
          if (canSet(row, col, k)) {
            board[row][col] = k+''
            if (solveSudoku(board)) return true
            else board[row][col] = '.'
          }
        }
        return false
      }
    }
  }
  return true

  
}


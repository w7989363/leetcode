// 51 hard Backtracking

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  // queensPosition[n] 表示第 n 行的皇后放在第几列
  let queensPosition = Array.from({length:n}).fill(-1)
  const res = []
  function solveRow(row) {
    // 递归结束条件，最后一行已经填上皇后
    if (row === n) {
      res.push(queensPosition.map(colIdx => {
        return '.'.repeat(colIdx)+'Q'+'.'.repeat(n-colIdx-1)
      }))
      return
    }
    // 遍历当前行中所有位置
    for (let col = 0; col < n; col++) {
      if(canSet(row, col)) {
        queensPosition[row] = col
        // 放好本行，递归解决下面的行
        solveRow(row+1)
        // 遍历完该情况下的所有放置，重置本行皇后位置，继续对本行后面列放置皇后的情况进行遍历
        queensPosition[row] = -1
      }
    }
  }

  function canSet(row, col) {
    // 对本行以上的行进行遍历查看是否能放置
    for (let rowBefore = 0; rowBefore < row; rowBefore++) {
      // 两行的皇后列一样，冲突
      if(queensPosition[rowBefore] === col) return false
      // 对角冲突，即两个皇后形成一个正方形，即 x y 方向上距离相等
      if (Math.abs(row-rowBefore) === Math.abs(col-queensPosition[rowBefore])) return false
    }
    return true
  }

  solveRow(0)
  return res
  
}
console.log(solveNQueens(4))
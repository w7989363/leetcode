// 36 Hash medium

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = [],col = [], cube = [];
    for(let i = 0; i<9;i++){
        row[i] = [];
        col[i] = [];
        cube[i] = [];
    }
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] === ".") continue;
            let k = Math.floor(i/3)*3+Math.floor(j/3);
            let v = board[i][j];
            if(row[i].indexOf(v) === -1){
                row[i].push(v);
            }else{
                return false;
            }
            if(col[j].indexOf(v) === -1){
                col[j].push(v);
            }else{
                return false;
            }
            if(cube[k].indexOf(v) === -1){
                cube[k].push(v);
            }else{
                return false
            }
        }
    }
    return true;
};

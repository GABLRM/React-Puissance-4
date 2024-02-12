export const checkColumn = (column: string[]) => {

    for (let i = 0; i < column.length; i++) {
        if (column[i] === '') {
            return i
        };
    };
    return -1;
};

export const CheckWin = (grid: string[][], player: string) => {
    let victory = "";

    //COLUMN
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (j < 3) {
                if (grid[i][j] === player && grid[i][j + 1] === player && grid[i][j + 2] === player && grid[i][j + 3] === player) {
                    victory = '4 pion ' + player + ' sont en colonne';
                    return victory;
                };
            }
        };
    };

    //ROW
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i < 4) {
                if (grid[i][j] === player && grid[i + 1][j] === player && grid[i + 2][j] === player && grid[i + 3][j] === player) {
                    victory = '4 pion ' + player + ' sont en ligne';
                    return victory;
                };
            }
        };
    };

    //DIAGONAL DOWN TO TOP
    for (let i = 0; i < grid.length - 3; i++) {
        for (let j = 0; j < grid[i].length - 3; j++) {
            if (i < 4 && j < 3) {
                if (grid[i][j] === player && grid[i + 1][j + 1] && grid[i + 2][j + 2] === player && grid[i + 3][j + 3]) {
                    victory = '4 pion ' + player + ' sont en diagonale'
                    return victory;
                }
            };
        };
    };

    //DIAGONAL TOP TO DOWN
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length - 1; j++) {
            if (i < 4 && j <= 5) {
                if (grid[i][j] === player && grid[i + 1][j - 1] === player && grid[i + 2][j - 2] === player && grid[i + 3][j - 3] === player) {
                    victory = '4 pion ' + player + ' sont en diagonale'
                    return victory;
                };
            }
        };
    };
};
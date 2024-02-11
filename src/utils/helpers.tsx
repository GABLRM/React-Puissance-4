const checkColumn = (column: string[]) => {

    for (let i = 0; i < column.length; i++) {
        if (column[i] === '') {
            return i
        };
    };
};


export default checkColumn;
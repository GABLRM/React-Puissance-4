import { useRecoilState } from "recoil";
import { gridState } from "../atoms/GridState";

export const checkColumn = (column: string[]) => {

    for (let i = 0; i < column.length; i++) {
        if (column[i] === '') {
            return i
        };
    };
};

export const CheckWin = (player: string) => {

    const [grid, setGrid] = useRecoilState(gridState)
    return (
        <div>
            state : {grid[0]}
        </div>
    )
};
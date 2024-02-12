import { useRecoilState } from "recoil"
import { gridState } from "../../atoms/GridState"
import { CheckWin } from "../../utils/helpers";

const GameState = () => {

    const [grid] = useRecoilState(gridState);

    const isWinning = CheckWin(grid, "red");

    return (
        <div>
            Winner : {isWinning}
        </div>
    )
}

export default GameState;
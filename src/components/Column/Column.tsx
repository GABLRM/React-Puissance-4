import React from 'react';
import './Column.css';
import Token from '../Token/Token';
import { useRecoilState } from 'recoil';
import { gridState } from '../../atoms/GridState';
import { gameState } from '../../atoms/GameState';
import { CheckWin, checkBoardFull, checkColumn } from '../../utils/helpers';

interface Props {
    idCol: number;
}

const Column: React.FC<Props> = ({ idCol }) => {
    const [grid, setGrid] = useRecoilState(gridState);
    const [game, setGame] = useRecoilState(gameState);

    const gameFunc = (idCol: number) => {

        const nextFreeRow = checkColumn(grid[idCol]);

        if (nextFreeRow == -1) {
            return;
        }

        const nextGrid = grid.map((col, index) => {
            if (index === idCol) {
                return col.map((row, index) => {
                    if (index === nextFreeRow) {
                        return game.isPlaying;
                    }
                    return row;
                })
            }
            return col;
        })

        setGrid(nextGrid);

        const winned = CheckWin(nextGrid, game.isPlaying);

        if (winned) {
            if (game.isPlaying == "red") {
                var gagnant = game.red.playerName;
            } else {
                var gagnant = game.yellow.playerName;
            }
            setGame({
                "yellow": {
                    ...game.yellow,
                    "isPlaying": false
                },
                "red": {
                    ...game.red,
                    "isPlaying": false
                },
                "isPlaying": ""
            })
            alert('Victoire de ' + gagnant);
            return;
        }

        if (checkBoardFull(nextGrid)) {
            setGame({
                "yellow": {
                    ...game.yellow,
                    "isPlaying": false
                },
                "red": {
                    ...game.red,
                    "isPlaying": false
                },
                "isPlaying": ""
            })
            alert('Match nul');
            return;
        }
    
        if (game.isPlaying == "red") {
            setGame({
                "yellow": {
                    ...game.yellow,
                    "isPlaying": true
                },
                "red": {
                    ...game.red,
                    "isPlaying": false
                },
                "isPlaying": "yellow"
            })
        } else if (game.isPlaying == "yellow") {
            setGame({
                "yellow": {
                    ...game.yellow,
                    "isPlaying": false
                },
                "red": {
                    ...game.red,
                    "isPlaying": true
                },
                "isPlaying": "red"
            })
        }
        
    }

    return (
        <button
        className="column"
        onClick={() => gameFunc(idCol)}
        >
            <Token color={grid[idCol][5]} />
            <Token color={grid[idCol][4]} />
            <Token color={grid[idCol][3]} />
            <Token color={grid[idCol][2]} />
            <Token color={grid[idCol][1]} />
            <Token color={grid[idCol][0]} />
        </button>
    );
  };
  
  export default Column;
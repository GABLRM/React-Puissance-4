import React from 'react';
import './Column.css';
import Token from '../Token/Token';
import { useRecoilState } from 'recoil';
import { gridState } from '../../atoms/GridState';
import { gameState } from '../../atoms/GameState';

interface Props {
    idCol: number;
}

const Column: React.FC<Props> = ({ idCol }) => {
    const [grid, _] = useRecoilState(gridState);
    const [game, setGame] = useRecoilState(gameState);

    const updatePlayingUser = (idCol: number) => {
    
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
        onClick={() => updatePlayingUser(idCol)}
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
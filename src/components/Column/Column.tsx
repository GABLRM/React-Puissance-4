import React, { useContext } from 'react';
import './Column.css';
import Token from '../Token/Token';
import { useRecoilState } from 'recoil';
import { gridState } from '../../atoms/GridState';

interface Props {
    idCol: number;
}

const Column: React.FC<Props> = ({ idCol }) => {
    const [grid, setGrid] = useRecoilState(gridState);

    return (
        <button
        className="column"
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
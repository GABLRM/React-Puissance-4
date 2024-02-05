import React from 'react';
import './Grid.css';
import Column from '../Column/Column';

const Grid = () => {
    return (
        <div className="grid">
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    );
  };
  
  export default Grid;
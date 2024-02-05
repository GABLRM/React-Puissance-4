import React from 'react';
import './Column.css';
import Token from '../Token/Token';

const Column = () => {
    return (
        <button
        className="column"
        >
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
        </button>
    );
  };
  
  export default Column;
import React from "react";


export default function Square({ value, onSquareClick }) {
    if(value == 'X'){
      return (
        <button className="squareX" onClick={onSquareClick}>
          {value}
        </button>
      );
    } else if(value == 'O'){
        return (
          <button className="squareO" onClick={onSquareClick}>
            {value}
          </button>
        );
    } else{
        return (
          <button className="square" onClick={onSquareClick}>
            {value}
          </button>
        );
    }
  }
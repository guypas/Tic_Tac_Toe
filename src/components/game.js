import React from "react";
import Board from "./board";
import { useState } from 'react';


export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      description = 'Go to move #' + move;
      if(move % 2 == 0){
      return (
        <li key={move}>
          <button className='turnX' onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
      } else{
          return (
            <li key={move}>
              <button className='turnO' onClick={() => jumpTo(move)}>{description}</button>
            </li>
          );
      }
    });
  
    return (
      <div>
        <h1> tic-tac-toe </h1>
        <div className="game">
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
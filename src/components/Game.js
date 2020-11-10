import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [previousStatus, setPreviousStatus] = React.useState([
    Array(9).fill(null)
  ]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xTurn, setXTurn] = React.useState(true);
  const winner = calculateWinner(previousStatus[stepNumber]);
  const xO = xTurn ? "X" : "O";

  const handleClick = (i) => {
    const previousStatusPoint = previousStatus.slice(0, stepNumber + 1);
    const current = previousStatusPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setPreviousStatus([...previousStatusPoint, squares]);
    setStepNumber(previousStatusPoint.length);
    setXTurn(!xTurn);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXTurn(step % 2 === 0);
  };

  const renderMoves = () =>
    previousStatus.map((step, move) => {
      const goal = move ? `Go to move ${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{goal}</button>
        </li>
      );
    });

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={previousStatus[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>Previous Status</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};
export default Game;

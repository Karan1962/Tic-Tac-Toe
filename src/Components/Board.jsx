import React, { useState } from "react";
import Block from "./Block";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // --- if someone wins then below logic will be applied ----

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner(); // -- envoking this function on every render for making sure if someone won the game or not

  // --  when we want to start the game again --- 

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  // ---  managing state and updating our arrays value with respect to the arrays index where user clicked ---

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "x" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const showButton = state.some((item) => item === null); // -- this line checks if any value in the current array contains null value

  return (
    <div className={isWinner ? "full" : "main"}>
      <div className="board">
        {isWinner ? (
          <>
            <div className="winner">
              player {isWinner} won the game !{" "}
              <button onClick={handleReset}>wanna play again?</button>
            </div>
          </>
        ) : (
          <>
            {showButton ? (
              <h4>{isXTurn ? "player x" : "player 0"} please move !</h4>
            ) : (
              <h4>It's A Draw ! Please start again!</h4>
            )}

            <div className="row">
              <Block onClick={() => handleClick(0)} element={state[0]} />
              <Block onClick={() => handleClick(1)} element={state[1]} />
              <Block onClick={() => handleClick(2)} element={state[2]} />
            </div>
            <div className="row">
              <Block onClick={() => handleClick(3)} element={state[3]} />
              <Block onClick={() => handleClick(4)} element={state[4]} />
              <Block onClick={() => handleClick(5)} element={state[5]} />
            </div>
            <div className="row">
              <Block onClick={() => handleClick(6)} element={state[6]} />
              <Block onClick={() => handleClick(7)} element={state[7]} />
              <Block onClick={() => handleClick(8)} element={state[8]} />
            </div>

            {/* ---- if noone wins then the play again button will be rendered  ---- */}

            {!showButton ? (
              <div className="play_again_btn">
                <button onClick={handleReset}>play again</button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default Board;

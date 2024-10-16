import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner ? <p>{winner} won!</p> : <p>It&apos;s a Draw!</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;

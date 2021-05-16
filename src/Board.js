import {useState} from "react";

import Cell from "./Cell";

const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const defaultBoard = () => {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push([]);
    for (let j = 0; j < 9; j++) {
      board[i].push(new Cell({ value: `0`, fixed: false }));
    }
  }
  return board;
};

function Board() {
  const [board, setBoard] = useState(defaultBoard());

  return (
    <div className={'board'}>
      {indices.map((row) => (
        <div key={row} className={'row'}>
          {indices.map((col) => (
            <div key={col} className={'cell'}>
              {board[row][col].value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;

import {useState} from "react";

import {createEmptyBoard} from "./util";


function Board() {
  const [board, setBoard] = useState(createEmptyBoard());

  return (
    <div className={'board'}>
      {new Array(9).fill(0).map((_, row) => (
        <div key={row} className={'row'}>
          {new Array(9).fill(0).map((_, col) => (
            <div
              key={col}
              className={'cell'}
              style={{
                borderRight: [2, 5].includes(col) ? '4px solid black' : '',
                borderBottom: [2, 5].includes(row) ? '4px solid black' : '',
              }}
            >
              {board[row][col] ? board[row][col].value : '-'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;

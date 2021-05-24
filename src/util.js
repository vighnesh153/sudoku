/**
 * @author Vighnesh Raut <rvighnes@amazon.com>
 */

import Cell from "./Cell";


/**
 * @param {(Cell | null)[][]} grid
 * @param {number} boxRow
 * @param {number} boxCol
 * @param {number} ignoreRow
 * @param {number} ignoreCol
 * @returns Cell[]
 */
export const getValuesInBox = (grid, boxRow, boxCol, ignoreRow=-1, ignoreCol=-1) => {
  const values = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const x = boxRow + i;
      const y = boxCol + j;
      if (x === ignoreRow && y === ignoreCol) {
        continue;
      }
      if (grid[x][y] !== null) {
        values.push(grid[x][y]);
      }
    }
  }
  return values;
};

/**
 * @param {(Cell | null)[][]} grid
 * @param {number} row
 * @param {number} ignoreCol
 * @returns Cell[]
 */
export const getValuesInRow = (grid, row, ignoreCol=-1) => {
  const values = [];
  for (let col = 0; col < 9; col++) {
    const cell = grid[row][col];
    if (col === ignoreCol) {
      continue;
    }
    if (cell !== null) {
      values.push(cell);
    }
  }
  return values;
};

/**
 * @param {(Cell | null)[][]} grid
 * @param {number} col
 * @param {number} ignoreRow
 * @returns Cell[]
 */
export const getValuesInCol = (grid, col, ignoreRow=-1) => {
  const values = [];
  for (let row = 0; row < 9; row++) {
    const cell = grid[row][col];
    if (row === ignoreRow) {
      continue;
    }
    if (cell !== null) {
      values.push(cell);
    }
  }
  return values;
};

/**
 * @param {(Cell | null)[][]} grid
 * @param {number} cellRow
 * @param {number} cellCol
 * @returns number[]
 */
export const getPossibleValuesForCell = (grid, cellRow, cellCol) => {
  const boxRow = Math.floor(cellRow / 3);
  const boxCol = Math.floor(cellCol / 3);

  const existingBoxValues = getValuesInBox(grid, boxRow, boxCol, cellRow, cellCol);
  const existingRowValues = getValuesInRow(grid, cellRow, cellCol);
  const existingColValues = getValuesInCol(grid, cellCol, cellRow);

  const existingValues = new Set([...existingBoxValues, ...existingRowValues, ...existingColValues].map((cell) => cell.value));

  const possibleValues = [];
  for (let value = 1; value <= 9; value++) {
    if (existingValues.has(value) === false) {
      possibleValues.push(value);
    }
  }
  return possibleValues;
};

/**
 * @returns (Cell | null)[][]
 */
export const createEmptyBoard = () => {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push([]);
    for (let j = 0; j < 9; j++) {
      grid[i].push(null);
    }
  }
  return grid;
};

/**
 * @returns number[]
 */
export const generateProblem = () => {
  const grid = createEmptyBoard();


};

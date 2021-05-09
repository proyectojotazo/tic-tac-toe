import { squareList } from "./square.js";

class Board {
  constructor() {
    this.board = squareList;
  }

  getBoard() {
    return this.board;
  }

  getRowedBoard() {
    let rowedBoard = [];
    let row = [];
    this.getBoard().forEach((square, i) => {
      row.push(square.getText());
      if (i === 2 || i === 5 || i === 8) {
        rowedBoard.push(row);
        row = [];
      }
    });
    return rowedBoard;
  }

  getColumnedBoard() {
    let columnedBoard = [];
    let column = [];
    let column2 = [];
    let column3 = [];
    this.getBoard().forEach((square, i) => {
      if (i === 0 || i === 3 || i === 6) column.push(square.getText());
      if (i === 1 || i === 4 || i === 7) column2.push(square.getText());
      if (i === 2 || i === 5 || i === 8) column3.push(square.getText());
    });
    columnedBoard.push(column, column2, column3);
    return columnedBoard;
  }

  getDiagonalBoard() {
    let diagonalBoard = [];
    let diagonal = [];
    let diagonal2 = [];
    this.getBoard().forEach((square, i) => {
      if (i === 0 || i === 4 || i === 8) diagonal.push(square.getText());
      if (i === 2 || i === 4 || i === 6) diagonal2.push(square.getText());
    });
    diagonalBoard.push(diagonal, diagonal2);
    return diagonalBoard;
  }

  checkAllSquareFilled() {
    return this.getBoard().every((square) => square.getText() !== "");
  }

  setAllSquareClicked() {
    this.getBoard().forEach((square) => {
      square.setClicked();
    });
  }

  resetBoard() {
    this.board.forEach((square) => {
      let selectedSquare = square;
      selectedSquare.resetText();
      selectedSquare.clicked = false;
    });
  }
}

export const board = new Board();

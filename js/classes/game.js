import { p1, p2 } from "./player.js";
import { board } from "./board.js";
import { turnMsg, finishMsg } from "../other/msg.js";

// const msgFinishElement = document.getElementsByClassName('msg-finish')[0]
// const msgTurnElement = document.getElementsByClassName('msg-next-player')[0]

// const turnMsg = new Msg(msgTurnElement)
// const finishMsg = new MsgFinish(msgFinishElement)

export class Game {
  constructor() {
    this.playerOne = p1;
    this.playerTwo = p2;
    this.board = board;
  }

  play() {
    turnMsg.addText(turnMsg.defaultText)

    this.getBoard().forEach((square) => {
      let divSelected = square.getSquare();
      let squareSelected = square;

      divSelected.addEventListener("click", () => {

        if (!squareSelected.clicked) {
          squareSelected.setText(this.playerSign());
          this.checkWinner(this.playerOne);
          this.checkWinner(this.playerTwo);
          squareSelected.setClicked();
          this.changeTurn();
          turnMsg.addText(`Player ${this.playerSign()} Turn`)
        }
        if (this.isTie()) {
          finishMsg.setMsg('TIE', true)
          turnMsg.hideMsg()
        }
      });
    });
  }

  changeTurn() {
    this.playerOne.playing = !this.playerOne.playing;
    this.playerTwo.playing = !this.playerTwo.playing;
  }

  playerSign() {
    return this.playerOne.playing ? this.playerOne.sign : this.playerTwo.sign;
  }

  getBoard() {
    return this.board.getBoard();
  }

  checkRows(player, directionBoard) {
    let threeInRow = false;
    let rowedBoard = directionBoard;
    let lines = [];
    rowedBoard.forEach((row) => {
      threeInRow = row.every((element) => element === player.sign);
      lines.push(threeInRow);
    });

    return lines.some((el) => el === true);
  }

  checkWinner(player) {
    if (
      this.checkRows(player, this.board.getRowedBoard()) ||
      this.checkRows(player, this.board.getColumnedBoard()) ||
      this.checkRows(player, this.board.getDiagonalBoard())
    ) {
      player.setWin();
      finishMsg.setMsg(`Player ${player.sign} WINS!`)
      turnMsg.hideMsg()
      this.board.setAllSquareClicked();
    }
  }

  isTie() {
    if (
      this.board.checkAllSquareFilled() &&
      !this.playerOne.winner &&
      !this.playerTwo.winner
    ) {
      return true;
    }
  }

  resetGame() {
    this.board.resetBoard();
    this.playerOne.playing = true;
    this.playerTwo.playing = false;
    this.playerOne.winner = false;
    this.playerTwo.winner = false;
    finishMsg.resetMsg()
    turnMsg.addText(turnMsg.defaultText)
    turnMsg.showMsg()
  }
}

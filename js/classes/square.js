const squares = document.querySelectorAll(".square");

class Square {
  constructor(square) {
    this.square = square;
    this.clicked = false;
  }

  getSquare() {
    return this.square;
  }

  isClicked() {
    return this.clicked;
  }

  setClicked() {
    this.clicked = true;
  }

  getText() {
    return this.square.innerText;
  }

  setText(sign) {
    this.square.innerText = sign;
  }

  resetText() {
    this.square.innerText = "";
  }
}

export const squareList = [];

squares.forEach((square) => {
  squareList.push(new Square(square));
});

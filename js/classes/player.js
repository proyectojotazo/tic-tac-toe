class Player {
  constructor(sign, playing) {
    this.sign = sign;
    this.playing = playing;
    this.winner = false;
  }

  getTurn() {
    return this.playing;
  }

  setTurn() {
    this.playing = !this.playing;
  }

  getWin() {
    return this.winner;
  }

  setWin() {
    this.winner = true;
  }
}

export const p1 = new Player("X", true);
export const p2 = new Player("O", false);

class Game {
  constructor(moves) {
    this.moves = moves;
    this.countStrongest = (moves.length - 1) / 2;
  }

  checkWinner(move1, move2) {
    if (move1 === move2) return null;
    const strongest = [];
    const indexMove1 = this.moves.indexOf(move1) + 1;
    for (let i = indexMove1; i < indexMove1 + this.countStrongest; i++) {
      if (i === this.moves.length) break;
      strongest.push(this.moves[i]);
    }
    let remainder;
    if (strongest.length < this.countStrongest) remainder = this.countStrongest - strongest.length;
    for (let i = 0; i < remainder; i++) {
      strongest.push(this.moves[i]);
    }
    if (strongest.includes(move2)) return move2;
    return move1;
  }
}
exports.Game = Game;

const {table} = require('table');
const Game = require('./game').Game;

class Table {
  constructor(moves) {
    this.moves = moves;
    this.movesLength = this.moves.length;
    this.table = new Array(this.movesLength + 1).fill(null).map(() => new Array(this.movesLength + 1).fill(null));
    this.initializeTable();
  }

  initializeTable() {
    this.table[0][0] = 'Move';
    for (let i = 0; i < this.movesLength; i++) {
      this.table[0][i + 1] = this.moves[i];
      this.table[i + 1][0] = this.moves[i];
    }
    for (let i = 1; i < this.movesLength + 1; i++) {
      for (let j = 1; j < this.movesLength + 1; j++) {
        const game = new Game(this.moves);
        const winner = game.checkWinner(this.moves[i - 1], this.moves[j - 1]);
        if (winner === this.moves[i - 1]) this.table[i][j] = 'Win';
        else if (winner === this.moves[j - 1]) this.table[i][j] = 'Lose';
        else this.table[i][j] = 'Draw';
      }
    }
  }

  printTable() {
    console.log(table(this.table));
  }

}
exports.Table = Table;

const readline = require('readline-sync');
const availableMoves = process.argv.slice(2);

const Table = require('./app/table').Table;
const Game = require('./app/game').Game;
const Hmack = require('./app/hmack').Hmack;
const validation = require('./app/validation');

const resultValidation = validation(availableMoves);

if (resultValidation !== true) {
  for (let i = 0; i < resultValidation.length; i++) {
    console.log(resultValidation[i]);
  }
  console.log('Please, enter odd number of unique parameters >= 3.');
  console.log('Example:');
  console.log('A B C \n' + 'A 2 c D e\n' + '1 2 3 4 5 6 7\n');
  process.exit(1);
}

while (true) {
  const key = Hmack.generateKey();
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const computerMove = availableMoves[randomIndex];
  const hmack = new Hmack(computerMove);
  console.log('\nHMACK: ', hmack.createHmack(key));
  console.log('Available moves:');
  console.log('0 - Exit');
  for (let i = 0; i < availableMoves.length; i++) {
    console.log((i + 1).toString(), ' - ' + availableMoves[i]);
  }
  console.log('? - Help');
  const indexMove = readline.question('Enter your move: \n');

  switch (indexMove) {
    case ('?'):
      const table = new Table(availableMoves);
      table.printTable();
      break;
    case '0':
      return false;
    case indexMove > 0 && indexMove <= availableMoves.length ? indexMove : true:
      const userMove = availableMoves[indexMove - 1];
      console.log('Your move: ', userMove);
      console.log('Computer move: ', computerMove);

      const game = new Game(availableMoves);
      const winner = game.checkWinner(userMove, computerMove);
      if (winner === computerMove) console.log('You lose!');
      else if (winner === userMove) console.log('You win!');
      else console.log('Draw!');

      const buffer = Buffer.from(key, 'hex');
      const str = buffer.toString('utf8');

      console.log('HMACK key: ', key.toString('hex'));

      break;
  }

}


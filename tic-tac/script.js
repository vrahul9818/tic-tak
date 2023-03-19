const cells = document.querySelectorAll('.cell');
const playerTurn = document.getElementById('player');
const result = document.getElementById('result');
const restartBtn = document.getElementById('restart');
let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];

// Check for a win
const checkWin = () => {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (gameBoard[i] === currentPlayer &&
        gameBoard[i + 1] === currentPlayer &&
        gameBoard[i + 2] === currentPlayer) {
      return true;
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i] === currentPlayer &&
        gameBoard[i + 3] === currentPlayer &&
        gameBoard[i + 6] === currentPlayer) {
      return true;
    }
  }
  // Check diagonals
  if (gameBoard[0] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[8] === currentPlayer) {
    return true;
  }
  if (gameBoard[2] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[6] === currentPlayer) {
    return true;
  }
  return false;
}

// Check for a draw
const checkDraw = () => {
  return !gameBoard.includes('');
}

// Update player turn
const updatePlayerTurn = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  playerTurn.innerText = currentPlayer;
}

// Update cell content and game board
const updateCell = (cell, index) => {
  cell.innerText = currentPlayer;
  gameBoard[index] = currentPlayer;
}

// Reset game board and UI
const resetGame = () => {
  currentPlayer = 'X';
  gameBoard = ['','','','','','','','',''];
  cells.forEach(cell => cell.innerText = '');
  playerTurn.innerText = currentPlayer;
  result.innerText = '';
}

// Cell click event
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameBoard[index] === '') {
      updateCell(cell, index);
      if (checkWin()) {
        result.innerText = `Player ${currentPlayer} wins!`;
      } else if (checkDraw()) {
        result.innerText = 'It\'s a draw!';
      } else {
        updatePlayerTurn();
      }
    }
  });
});

// Restart button click event
restartBtn.addEventListener('click', () => {
  resetGame();
});

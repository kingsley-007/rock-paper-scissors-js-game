// Function to generate computer's move (rock, paper, or scissors)
function getComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// Function to determine the winner
function determineWinner(userMove, computerMove) {
  if (userMove === computerMove) {
    return 'It\'s a tie!';
  } else if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Function to play the game
function playGame(userMove) {
  const computerMove = getComputerMove();
  const resultElement = document.getElementById('result');

  const result = determineWinner(userMove, computerMove);

  resultElement.textContent = `You chose ${userMove}. Computer chose ${computerMove}. ${result}`;
}

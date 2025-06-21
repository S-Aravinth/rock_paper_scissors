let userScore = 0;
let computerScore = 0;
let pointLimit = 5;
let gameOver = false;

function play(userChoice) {
  if (gameOver) return;

  pointLimit = parseInt(document.getElementById('pointLimit').value);
  if (pointLimit < 1 || pointLimit > 20) {
    alert("Please set a point limit between 1 and 20.");
    return;
  }

  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = userChoice;
  document.getElementById('computer-choice').textContent = computerChoice;

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    userScore++;
    result = "You win this round!";
  } else {
    computerScore++;
    result = "Computer wins this round!";
  }

  document.getElementById('result').textContent = result;
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('computerScore').textContent = computerScore;

  checkGameOver();
}

function checkGameOver() {
  if (userScore >= pointLimit) {
    document.getElementById('result').textContent = "🎉 You won the game!";
    gameOver = true;
    document.getElementById('restartBtn').style.display = 'inline-block';
  } else if (computerScore >= pointLimit) {
    document.getElementById('result').textContent = "💻 Computer won the game!";
    gameOver = true;
    document.getElementById('restartBtn').style.display = 'inline-block';
  }
}

function restartGame() {
  userScore = 0;
  computerScore = 0;
  gameOver = false;
  document.getElementById('userScore').textContent = '0';
  document.getElementById('computerScore').textContent = '0';
  document.getElementById('user-choice').textContent = '-';
  document.getElementById('computer-choice').textContent = '-';
  document.getElementById('result').textContent = '-';
  document.getElementById('restartBtn').style.display = 'none';
}

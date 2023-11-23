let computerScore = 0;
let userScore = 0;
let userChoice = null;
let messageTimeout;

function playRound(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "It's a tie!";
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {
    return "Computer wins!";
  } else {
    return "User wins!";
  }
}

function resetMessage() {
  if (!userChoice) {
    document.getElementById("result").textContent = "Choose an option";
  }
}

document.getElementById("rockButton").addEventListener("click", function () {
  userChoice = "Rock";
  document.getElementById("result").textContent =
    "You chose Rock. Click 'Play' to start the game.";
  clearTimeout(messageTimeout);
  messageTimeout = setTimeout(resetMessage, 5000);
});

document.getElementById("paperButton").addEventListener("click", function () {
  userChoice = "Paper";
  document.getElementById("result").textContent =
    "You chose Paper. Click 'Play' to start the game.";
  clearTimeout(messageTimeout);
  messageTimeout = setTimeout(resetMessage, 5000);
});

document
  .getElementById("scissorsButton")
  .addEventListener("click", function () {
    userChoice = "Scissors";
    document.getElementById("result").textContent =
      "You chose Scissors. Click 'Play' to start the game.";
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(resetMessage, 5000);
  });

document.getElementById("playButton").addEventListener("click", function () {
  if (userChoice) {
    const options = ["Rock", "Paper", "Scissors"];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    const result = playRound(computerChoice, userChoice);

    document.getElementById(
      "result"
    ).textContent = `Computer chose ${computerChoice}. ${result}`;
    if (result === "Computer wins!") {
      computerScore++;
      document.getElementById("computerScore").textContent = computerScore;
    } else if (result === "User wins!") {
      userScore++;
      document.getElementById("userScore").textContent = userScore;
    }
    userChoice = null; // Reset user choice
  } else {
    document.getElementById("result").textContent =
      "Please choose an option first.";
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(resetMessage, 5000);
  }
});

document.getElementById("resetButton").addEventListener("click", function () {
  computerScore = 0;
  userScore = 0;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("userScore").textContent = userScore;
  userChoice = null; // Reset user choice
  resetMessage();
});

// ... Alte funcții existente ...

// document.getElementById("userName").addEventListener("input", function () {
//   const newName = this.textContent.trim();
//   if (newName.length > 10) {
//     newName = newName.substring(0, 10);
//     this.textContent = newName;
//   } else {
//     newName.length > 10;
//     alert("Please enter a name of up to 10 characters.");
//   }
// });

// ... Alte funcții existente ...

const userName = document.getElementById("userName");
const maxChars = 10;

userName.addEventListener("input", function () {
  let newName = this.textContent.trim();
  if (newName.length > maxChars) {
    this.textContent = newName.substring(0, maxChars);
    document.getElementById("charCountWarning").style.display = "block";
  } else {
    document.getElementById("charCountWarning").style.display = "none";
  }
});

userName.addEventListener("focus", function () {
  document.getElementById("charCountWarning").style.display = "none";
});

userName.addEventListener("blur", function () {
  if (this.textContent.trim().length > maxChars) {
    document.getElementById("charCountWarning").style.display = "block";
  }
});

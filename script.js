let userScore = 0;
let npcScore = 0;
const userScore_element = document.getElementById("userScore");
const npcScore_element = document.getElementById("npcScore");
const feedback_element = document.getElementById("feedback");
const result_element = document.getElementById("result");
const rock = document.getElementById("rock");
const papper = document.getElementById("papper");
const scissors = document.getElementById("scissors");

// console.log(userScore_element);
// console.log(npcScore_element);
// console.log(feedback_element);
// console.log(result_element);
// console.log(rock);

function game(userChoice) {
  let npcChoice = randomChoice();
  results(userChoice, npcChoice);
  feedback_element.innerHTML = "You: " + userChoice + " | NPC: " + npcChoice;
}

function results(userChoice, npcChoice) {
  switch (userChoice + npcChoice) {
    case "RockScissors":
    case "PapperRock":
    case "ScissorsPapper":
      winner();
      break;
    case "RockRock":
    case "PapperPapper":
    case "ScissorsScissors":
      result_element.innerHTML = "Draw!";
      break;
    default:
      loser();
      break;
  }
}

function winner() {
  userScore++;
  result_element.innerHTML = "You win!";
  userScore_element.innerHTML = userScore;
}

function loser() {
  npcScore++;
  result_element.innerHTML = "You lose!";
  npcScore_element.innerHTML = npcScore;
}

function randomChoice() {
  let npcChoice = Math.floor(Math.random() * 3);
  switch (npcChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Papper";
    default:
      return "Scissors";
  }
}

function resetGame() {
  userScore = 0;
  npcScore = 0;
  userScore_element.innerHTML = userScore;
  npcScore_element.innerHTML = npcScore;
  result_element.innerHTML = "Results Message here";
  feedback_element.innerHTML = "Feedback Message here";
}

function main() {
  rock.addEventListener("click", function() {
    game("Rock");
  });
  papper.addEventListener("click", function() {
    game("Papper");
  });
  scissors.addEventListener("click", function() {
    game("Scissors");
  });
}

main();

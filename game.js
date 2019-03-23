let userScore = 0;
let npcScore = 0;
const userScore_element = document.getElementById("userScore"); //winner(); reset();
const npcScore_element = document.getElementById("npcScore"); //loser(); reset();
const feedback_element = document.getElementById("feedback"); //game(); reset();
const result_element = document.getElementById("result"); //winner();loser(); reset();

function game(userChoice) {
  const npcChoice = randomChoice();
  const userChoice_element = document.getElementById("user-choice");
  const npcChoice_element = document.getElementById("npc-choice");
  const options_div = document.getElementById("options");

  options_div.style.opacity = "0.3";

  userChoice_element.setAttribute("src", "src/rock_3.png");
  npcChoice_element.setAttribute("src", "src/rock_4.png");
  userChoice_element.style.animation = "shakeHands 1s ease-in-out";
  npcChoice_element.style.animation = "shakeHands 1s ease-in-out";

  setTimeout(function() {
    userChoice_element.style.animation = "";
    npcChoice_element.style.animation = "";

    switch (npcChoice) {
      case "Papper":
        npcChoice_element.setAttribute("src", "src/paper4.png");
        break;
      case "Scissors":
        npcChoice_element.setAttribute("src", "src/scissors_4.png");
        break;
      default:
        npcChoice_element.setAttribute("src", "src/rock_4.png");
        break;
    }

    switch (userChoice) {
      case "Papper":
        userChoice_element.setAttribute("src", "src/paper3.png");
        break;
      case "Scissors":
        userChoice_element.setAttribute("src", "src/scissors3.png");
        break;
      default:
        userChoice_element.setAttribute("src", "src/rock_3.png");
        break;
    }

    results(userChoice, npcChoice);
    options_div.style.opacity = "1";
  }, 1000);
}

function results(userChoice, npcChoice) {
  feedback_element.innerHTML = "You: " + userChoice + " | NPC: " + npcChoice;
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

function reset() {
  userScore = 0;
  npcScore = 0;
  userScore_element.innerHTML = userScore;
  npcScore_element.innerHTML = npcScore;
  result_element.innerHTML = "Results Message here";
  feedback_element.innerHTML = "Feedback Message here";
}

function main() {
  const rock = document.getElementById("rock");
  const papper = document.getElementById("papper");
  const scissors = document.getElementById("scissors");

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

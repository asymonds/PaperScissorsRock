function getComputerChoice() {
  let rndNum = Math.floor(Math.random() * 3) + 1;
  console.log(rndNum);
  switch (rndNum) {
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    case 3:
      return "rock";
      break;
    default:
      return "paper";
  }
}

function playRound(player, computer) {
  switch (player) {
    case "paper":
      if (computer === "paper")
        return { points: 0, result: "It's a Paper Draw" };
      else if (computer === "scissors")
        return { points: -1, result: "You Lose! Scissors beats Paper" };
      else return { points: 1, result: "You Win! Paper beats Rock" };
      break;
    case "scissors":
      if (computer === "scissors")
        return { points: 0, result: "It's a Scissors Draw" };
      else if (computer === "rock")
        return { points: -1, result: "You Lose! Rock beats Scissors" };
      else return { points: 1, result: "You Win! Scissors beat Paper" };
      break;
    case "rock":
      if (computer === "rock") return { points: 0, result: "It's a Rock Draw" };
      else if (computer === "paper")
        return { points: -1, result: "You Lose! Paper beats Rock" };
      else return { points: 1, result: "You Win! Rock beats Scissors" };
      break;
    default:
      return "Default Draw. Couldn't determine inputs";
  }
}

function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Paper, Scissors or Rock? Choose wisely!");
    res = playRound(playerChoice.toLowerCase(), getComputerChoice());
    console.log(res.result);
    score += res.points;
  }
  return score;
}

let didYouWin = game();
if (didYouWin < 0) console.log("Loser");
else if (didYouWin === 0) console.log("Draw");
else console.log("Winner Winner Chicken Dinner");

console.log("Your score is " + didYouWin);

// console.log(getComputerChoice());

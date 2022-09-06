
//function to get a random computer choice from the array ['Rock', 'Paper', 'Scissors']

let x = ['Rock','Paper','Scissors'];
function getComputerChoice(x){
const random = Math.floor(Math.random()* x.length);
  console.log(x[random]);
}
// function for one round of RoShamBo
function roShamBo(playerSelection, computerSelection) {
let player = playerSelection;
let computer = computerSelection;
  if (player === computer) {
    return "Tie";
  }
  
  if (player == "rock" && computer == "scissors") {
    return prompt("You Win! Player Wins!");
  }
  if (player == "rock" && computer == "paper") {
   return prompt("You Lose! Computer Wins"); 
  }
  if (player == "scissors" && computer == "paper"){
    return prompt("You Win! Player Wins");
  }
  if (player == "paper" && computer == "rock") {
    return prompt("You Win! Player Wins!");
  }
  if (player == "paper" && computer == "scissors"){
    return prompt("You Lose! Computer Wins");
  }
  if (player == "scissors" && "computer" == "rock") {
    return prompt("You Lose! Computer Wins");
  }
}
prompt("Choose your Weapon: ")
let playerSelection = ['Rock','Paper', 'Scissors'];
const computerSelection = getComputerChoice(x);
console.log(roShamBo(playerSelection, computerSelection));
//1.function that adds image when user presses a button and sets user choice

let userChoice = '';
let compChoice = '';
let result = '';

let userWins = 0;
let compWins = 0;



function userText(weapon) {
  userChoice = weapon;
  randomChoice();
}


//2.function for comp to choose, then display image
function randomChoice() {
  let choiceIndex = Math.floor((Math.random() * 10) % 3);
  if (choiceIndex == 0) {
    compChoice = 'Scissors';
  }
  else if (choiceIndex == 1) {
    compChoice = 'Paper';
  }
  else {
    compChoice = 'Rock';
  }
  compText(compChoice);
}

function compText(cChoice) {
  let compChoice = cChoice;
  game(compChoice);
}


//
function game(compChoice) {
  if (userChoice == 'Reset') {
    userWins = 0;
    compWins = 0;

  }
  else if (userChoice == compChoice) {
    result = 'draw.';
  }
  else if ((userChoice == 'Rock' && compChoice == 'Scissors') || (userChoice == 'Paper' && compChoice == 'Rock') || (userChoice == 'Scissors' && compChoice == 'Paper')) {
    result = 'win.';
    userWins++;
  }
  else {
    result = 'lose.';
    compWins++;
  }
  document.getElementById('result1').innerHTML = `<h1>You chose ${userChoice}, Computer chose ${compChoice}. You ${result}</h1>`
  document.getElementById('scores').innerHTML = `You: ${userWins} | Comp: ${compWins}`
}
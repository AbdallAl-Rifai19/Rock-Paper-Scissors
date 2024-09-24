let userScore = 0;
let computerScore = 0;
const userScore_span  = document.getElementById('user-score');
const computerScore_Span = document.getElementById('comp-score');
const scoreBoare_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r' , 'b' , 's'];
  const randomNumber = Math.floor(Math.random() * 3); // 0 or 1 or 2
  return choices[randomNumber];
  
}

function convertToWord(letter) {
  if(letter === 'r') return "Rock" ;
  if(letter === 'p') return "paper" ;
  return "scissors" ;

}


function wins(userChoice ,computerChoice) {
  // console.log("WINS.");
  const userchoise_div = document.getElementById(userChoice);
  userScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_Span.innerHTML = computerScore;
 result_p.innerHTML = `${convertToWord(userChoice)}(user) beats  ${convertToWord(computerChoice)}(comp). You Win! 🔥`;
 userchoise_div.classList.add('green-glow');
 setTimeout(()=>userchoise_div.classList.remove('green-glow'),1000);
  
}

function lose(userChoice ,computerChoice) {
  // console.log("LOSE.");
  const userchoise_div = document.getElementById(userChoice);
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_Span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You lost...`;
    userchoise_div.classList.add('red-glow');
    setTimeout(()=>userchoise_div.classList.remove('red-glow'),1000);
  
}
function draw(userChoice ,computerChoice) {
    const userchoise_div = document.getElementById(userChoice);
    console.log("DRAW.");
    result_p.innerHTML = `${convertToWord(userChoice)}(user) equals  ${convertToWord(computerChoice)}(comp). It's a draw.`;
    userchoise_div.classList.add('gray-glow');
    setTimeout(()=>userchoise_div.classList.remove('gray-glow'),1000);

}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log("user choice " + userChoice);
  // console.log("computer choice " + computerChoice);
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case'sp' :
      // console.log("User Wins.");
      wins(userChoice , computerChoice);
      break;
    case 'rp':
    case 'ps':
    case'sr' :
      // console.log("User Loses.");
      lose(userChoice , computerChoice);
      break;
    case 'rr':
    case 'pp':
    case'ss' :
      // console.log("It's a draw.");
      draw(userChoice ,computerChoice);
      break;
  }

}

function main() {
  
  rock_div.addEventListener('click',()=> game("r"));

  paper_div.addEventListener('click', ()=>  game("p"));

  scissors_div.addEventListener('click', ()=> game("s"));
}
main() ;


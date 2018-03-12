function computerPlay(){
    let rn = Math.floor(Math.random()*3); //{0;1;2}
    return (rn<1) ? "Rock" : (rn<2) ? "Paper" : "Scissors";
}

function playRound(e){
    if (compScore < 5 && playerScore < 5)
    {
        let computerSelection = computerPlay();
        let playerSelection = e.target.innerHTML;
        console.log("Round played");

        if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
            outcomeDiv.textContent = "Tie. You both selected " + computerSelection;
            updateScore(0);
            return 0; 
        }

        else if (playerSelection.toUpperCase() === "ROCK"){
            if (computerSelection === "Paper"){
                outcomeDiv.textContent = "You Lose! Rock loses to Paper";
                updateScore(-1);
                return -1; 
            }
            else{
                outcomeDiv.textContent = "You Win! Rock beats Scissors";
                updateScore(1);
                return 1; 
            }
        }

        else if (playerSelection.toUpperCase() === "PAPER"){
            if (computerSelection === "Scissors"){
                outcomeDiv.textContent = "You Lose! Paper loses to Scissors";
                updateScore(-1);
                return -1; 
            }
            else{
                outcomeDiv.textContent = "You Win! Paper beats Rock";
                updateScore(1);
                return 1; 
            }
        }

        else if (playerSelection.toUpperCase() === "SCISSORS"){
            if (computerSelection === "Rock"){ 
                outcomeDiv.textContent = "You Lose! Scissors lose to Rock";
                updateScore(-1);
                return -1; 
            }
            else{
                outcomeDiv.textContent = "You Win! Scissors beat Paper";
                updateScore(1);
                return 1; 
        }
    }

    console.log("ERROR: Did not recognize the move");
    return 0;
    }   
}

function updateScore(roundOutcome)
{  
    scoreContainer = document.querySelector("#score");

    roundOutcome === 1 ? playerScore++ : roundOutcome === -1 ? compScore++ : 0;

    scoreContainer.textContent = "Player's score: " + playerScore + "\n"
    + "Computer's score: " + compScore + "\n";

    if (playerScore >= 5)
        scoreContainer.innerHTML += "<br/>Players wins!";
    else if (compScore >= 5)
        scoreContainer.innerHTML += "<br/>Computer wins";
}

var playerScore = 0;
var compScore = 0;

const resultsContainer = document.querySelector("#results");
const outcomeDiv = document.createElement('div');
outcomeDiv.textContent = '';
resultsContainer.appendChild(outcomeDiv);

const choiceButtons = Array.from( document.querySelectorAll('.Choice'));
choiceButtons.forEach( button => button.addEventListener( 'click', playRound ) );
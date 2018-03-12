function computerPlay(){
    let rn = Math.floor(Math.random()*3); //{0;1;2}
    return (rn<1) ? "Rock" : (rn<2) ? "Paper" : "Scissors";
}

function playRound(e){
    let computerSelection = computerPlay();
    let playerSelection = e.target.innerHTML;
    console.log("Round played");

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        console.log("Tie. You both selected " + computerSelection);
        updateScore(0);
        return 0; 
    }

    else if (playerSelection.toUpperCase() === "ROCK"){
        if (computerSelection === "Paper"){
            console.log("You Lose! Rock loses to Paper");
            updateScore(-1);
            return -1; 
        }
        else{
            console.log("You Win! Rock beats Scissors");
            updateScore(1);
            return 1; 
        }
    }

    else if (playerSelection.toUpperCase() === "PAPER"){
        if (computerSelection === "Scissors"){
            console.log("You Lose! Paper loses to Scissors");
            updateScore(-1);
            return -1; 
        }
        else{
            console.log("You Win! Paper beats Rock");
            updateScore(1);
            return 1; 
        }
    }

    else if (playerSelection.toUpperCase() === "SCISSORS"){
        if (computerSelection === "Rock"){ 
            console.log("You Lose! Scissors lose to Rock");
            updateScore(-1);
            return -1; 
        }
        else{
            console.log("You Win! Scissors beat Paper");
            updateScore(1);
            return 1; 
        }
    }

    console.log("ERROR: Did not recognize the move");
    return 0;   
}

function updateScore(roundOutcome)
{  
    roundOutcome === 1 ? playerScore++ : roundOutcome === -1 ? compScore++ : 0;
    console.log("Player's score: " + playerScore + "\n"
        + "Computer's score: " + compScore + "\n"
        + "The winner is " + (playerScore > compScore? "Player" : playerScore < compScore? "Computer" : "No one") +"!");
}

var playerScore = 0;
var compScore = 0;

const choiceButtons = Array.from( document.querySelectorAll('.Choice'));
choiceButtons.forEach( button => button.addEventListener( 'click', playRound ) );
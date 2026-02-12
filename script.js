const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

rockButton.addEventListener("click", () =>{
    console.log("You've selected rock")
});
paperButton.addEventListener("click", () =>{
    console.log("You've selected paper")
});
scissorsButton.addEventListener("click", () =>{
    console.log("You've selected scissors")
});

function getComputerChoice(){
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock"
    } else if (randomNumber > 0.66){
        return "paper"
    } else {
        return "scissors"
    }
}


rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    console.log("Computer've selected " + computerSelection);
    playRound("rock", computerSelection);

})
paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    console.log("Computer've selected " + computerSelection);
    playRound("paper", computerSelection);

})
scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    console.log("Computer've selected " + computerSelection);
    playRound("scissors", computerSelection);
    
})

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection) {
       return resultDiv.textContent = "It's a tie!";
    } 
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return resultDiv.textContent = "You lose =("
        } else {
            return resultDiv.textContent = "You won!! =)"
        }
    }
    if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            return resultDiv.textContent = "You won!! =)"
        } else {
            return resultDiv.textContent = "You lose =("
        }
    }
    if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return resultDiv.textContent = "You lose =("
        } else {
            return resultDiv.textContent = "You won!! =)"
        }
    }
    }

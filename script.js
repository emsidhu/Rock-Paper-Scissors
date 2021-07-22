function computerSelection() {
    let choice = Math.round(Math.random() * 2) + 1
    switch(choice) {
        case 1:
            return "rock"
        case 2:
            return "paper"
            
        case 3:
            return "scissors"
    }

}


function playRound(playerSelection, computerSelection) {
    const feedback = {string: "",winner: ""}
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            feedback.string = "It's a tie! You both chose Rock"
            feedback.winner = "tie"

        } else if (computerSelection == "paper") {
            feedback.string = "You Lose. Paper beats Rock"
            feedback.winner = "computer"

        } else if (computerSelection == "scissors") {
            feedback.string = "You Win! Rock beats Scissors"
            feedback.winner = "player"
        }
    } else if (playerSelection.toLowerCase() == "paper") {

        if (computerSelection == "rock") {
            feedback.string = "You Win! Paper beats Rock"
            feedback.winner = "player"

        } else if (computerSelection == "paper") {
            feedback.string = "It's a tie! You both chose Paper"
            feedback.winner = "tie"

        } else if (computerSelection == "scissors") {
            feedback.string = "You Lose. Scissors beats Paper"
            feedback.winner = "computer"
        }

    } else if (playerSelection.toLowerCase() == "scissors") {
        
        if (computerSelection == "rock") {
            feedback.string = "You Lose. Rock beats Scissors"
            feedback.winner = "computer"

        } else if (computerSelection == "paper") {
            feedback.string = "You Win! Scissors beats Paper"
            feedback.winner = "player"

        } else if (computerSelection == "scissors") {
            feedback.string = "It's a tie! You both chose Scissors"
            feedback.winner = "tie"
        }
    }
    game(feedback)
}


let buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach(button => {
    let choice = button.id
    button.addEventListener("click", (e) => {
        playRound(choice, computerSelection())
    })
})
let results = document.querySelector("#results")
let playerPoints = 0
let computerPoints = 0
let roundNumber = 1
results.textContent = "Let's play a best of 5 game of Rock, Paper, Scissors"

function game(feedback) {
    if (playerPoints < 5 && computerPoints < 5) {
        results.textContent = feedback.string
        if (feedback.winner == "player") {
            playerPoints++ 
        } else if (feedback.winner == "computer") {
            computerPoints++
        }
        
        roundNumber++
        results.innerHTML += `<br />Round ${roundNumber}. Your points = ${playerPoints}. Computer's points = ${computerPoints}. Choose Rock, Paper, or Scissors.`
    }
    if (playerPoints == 5) {
        results.textContent = "You win the game! Good job!"
    } else if (computerPoints == 5) {
        results.textContent = "You lose, too bad."
    }
    
}



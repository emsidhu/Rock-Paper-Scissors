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
    if (playerSelection == null) {
        feedback.string = "invalid choice, please choose Rock, Paper, or Scissors"
    } else if (playerSelection.toLowerCase() == "rock") {
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

    } else {
        feedback.string = "invalid choice, please choose Rock, Paper, or Scissors"
        feedback.winner = "invalid"
    }
    return feedback
}


function game() {
    let playerPoints = 0
    let computerPoints = 0
    let roundNumber = 1
    console.log("Let's play a best of 5 game of Rock, Paper, Scissors")
    while (playerPoints < 3 && computerPoints < 3) {
        let playerSelection = prompt(`Round ${roundNumber}. Choose Rock, Paper, or Scissors.`)
        const feedback = playRound(playerSelection, computerSelection())
        console.log(feedback.string)
        if (feedback.winner == "player") {
            playerPoints++
        } else if (feedback.winner == "computer") {
            computerPoints++
        }
        roundNumber++
    }
    if (playerPoints == 3) {
        console.log("You win the game! Good job!")
    } else {
        console.log("You lose, too bad.")
    }
}

game()


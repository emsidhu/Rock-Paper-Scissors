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

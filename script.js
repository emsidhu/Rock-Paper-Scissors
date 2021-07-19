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

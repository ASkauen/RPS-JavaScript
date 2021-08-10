    const choices = ["rock", "paper", "scissors"]
    const buttons = document.querySelectorAll("button")
    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissors = document.querySelector("#scissors")
    const results = document.querySelector("#results")
    const point = document.createElement("p")
    const chose = document.createElement("p")
    const finalResults = document.createElement("p")
    let playerScore = 0;
    let computerScore = 0;

    point.classList.add("point")
    finalResults.classList.add("final-results")
    chose.classList.add("choices")


    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        game((button.id).toString())
      })
    })

    function computerPlay() {
      return choices[Math.random() * choices.length | 0]
    }

    function play(playerSelection, computerSelection) {
      if (playerSelection == null || playerSelection == "") return "Canceled"
      playerSelection = playerSelection.toLowerCase();
      let result = undefined;

      if (choices.includes(playerSelection)) {
        if (playerSelection == computerSelection) {
          result = "Tie";
        } else {
          switch(playerSelection) {
            case "rock":
              if (computerSelection == "paper") {
                result = "Computer +1";
              } else result = "Player +1";
              break;
            case "paper":
              if (computerSelection == "scissors") {
                result = "Computer +1";                 
              } else result = "Player +1";
              break;
            case "scissors":
              if (computerSelection == "rock") {
                result = "Computer +1"             
              } else result = "Player +1"
              break;
          }
        }
        chose.textContent = `Computer chose ${computerSelection} - \nPlayer chose ${playerSelection.toLowerCase()}`
        results.appendChild(chose)
        return result
      } else {
        return "Invalid input"
      }
    }

    function game(playerSelection) {
      let computerSelection = computerPlay()
      let result = play(playerSelection, computerSelection)
      let finalResult;
      if (document.getElementsByClassName("final-results")[0] != undefined) results.removeChild(finalResults)

      if (result == "Player +1" || result == "Computer +1" || result == "Tie"){
        if (result == "Player +1") {
          ++playerScore;
          point.textContent = `Player +1   |   Player: ${playerScore} Computer: ${computerScore}`
          results.appendChild(point)
        } else if (result == "Computer +1"){
          ++computerScore; 
          point.textContent = `Computer +1 | Player: ${playerScore} Computer: ${computerScore}`
          results.appendChild(point)

        } else {
          point.textContent = `Tie | Player: ${playerScore} Computer: ${computerScore}`
          results.appendChild(point)
        }

        switch (true) {
          case (playerScore > computerScore):
            finalResult = "Player wins"
            break;
          case (computerScore > playerScore):
            finalResult = "Computer wins"
            break;
          default:
            finalResult = "Tie"
            break;
        }
      }
      if (playerScore == 5 || computerScore == 5) {
        finalResults.textContent = `Final score: \nPlayer: ${playerScore} Computer: ${computerScore} \n${finalResult}`
        results.appendChild(finalResults)
        playerScore = 0
        computerScore = 0    
      }
    }
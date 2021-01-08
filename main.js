let playerMove;
//let computerMove = "paper";

// if (playerMove === "rock" && computerMove === "paper") {  
//  console.log("Computer Wins");
// }
// if (playerMove === "rock" && computerMove === "rock") {  
//     console.log("Draw!");
//    }
// if (playerMove === "rock" && computerMove === "scissors") {  
//     console.log("Player Wins!");
//    }
// if (playerMove === "paper" && computerMove === "rock") {  
//     console.log("Player Wins");
//    }
// if (playerMove === "paper" && computerMove === "paper") {  
//     console.log("Draw!");
//    }
// if (playerMove === "paper" && computerMove === "scissors") {  
//     console.log("Computer Wins");
//    }
// if (playerMove === "scissors" && computerMove === "paper") {  
//     console.log("Player Wins");
//    }
// if (playerMove === "scissors" && computerMove === "rock") {  
//     console.log("Computer Wins");
//    }
// if (playerMove === "scissors" && computerMove === "scissors") {  
//     console.log("Draw!");
//    }

   //Task2

function getWinner(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "paper") {  
        return -1;
       }
       if (playerMove === "rock" && computerMove === "rock") {  
        return 0;
          }
       if (playerMove === "rock" && computerMove === "scissors") {  
        return 1;
          }
       if (playerMove === "paper" && computerMove === "rock") {  
        return 1;
          }
       if (playerMove === "paper" && computerMove === "paper") {  
        return 0;
          }
       if (playerMove === "paper" && computerMove === "scissors") {  
        return -1;
          }
       if (playerMove === "scissors" && computerMove === "paper") {  
        return 1;
          }
       if (playerMove === "scissors" && computerMove === "rock") {  
        return -1;
          }
       if (playerMove === "scissors" && computerMove === "scissors") {  
        return 0;
          }
}


//Task3


// function getResult(result) {
//     if (result === 1) {
//         return "Player Wins!"
//     } else if (result === -1) {
//         return "Computer Wins!"
//     } else if (result === 0) {
//         return "Draw!"
//     } else {
//         return "Please enter a valid choice:(rock, paper, scissors)!"
//     }
// }



//Task4

function getComputerMove() {
    let choice = Math.floor(Math.random() * 3); 
    console.log(choice);
    if (choice === 0){
      return "rock";
    } else if (choice === 1){
      return "paper";
    } else {
      return "scissors";
    }
} 

//Task6

let games = 0;
let wins = 0;
let losses = 0;
let draws = 0;

function getResult(result) {
    games++;
    
    if (result === 1) {
        wins++;
        
        return "Player Wins!"
    } else if (result === -1) {
        losses++;
        
        return "Computer Wins!"
    } else if (result === 0) {
        draws++;
        
        return "Draw!"
    } else {
        return "Please enter a valid choice:(rock, paper, scissors)!"
    }
}

function outputResults(){
    console.log(`Games ${games}`)
    console.log(`Wins ${wins}`)
    console.log(`Losses ${losses}`)
    console.log(`Draws ${draws}`)
}

//Task5

let endGame;
// do {
//     playerMove = prompt("Pick an option");
//     let result = getWinner(playerMove, getComputerMove());
//     alert(getResult(result));
//     outputResults();
//     endGame = confirm("Do you want to play again?");
// } while(endGame)

//task7

let output = document.querySelector("#output");
let rock = document.querySelector("#rock");
function selectRock(e) {
    if(e) {
        let result = getWinner("rock", getComputerMove()); 
        output.innerHTML = getResult(result);
        console.log(getResult(result));
    }
    }

rock.addEventListener("click", selectRock);

let paper = document.querySelector("#paper")
function selectPaper(e) {
    if(e) {
        let result = getWinner("paper", getComputerMove()); 
        output.innerHTML = getResult(result);
        console.log(getResult(result));
    }
    }

rock.addEventListener("click", selectPaper);

let scissors = document.querySelector("#scissors")
function selectScissors(e) {
    if(e) {
        let result = getWinner("scissors", getComputerMove()); 
        output.innerHTML = getResult(result);
        console.log(getResult(result));
    }
}
rock.addEventListener("click", selectScissors);





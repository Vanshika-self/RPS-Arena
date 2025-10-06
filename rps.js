let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-Score");
const computerScorepara = document.querySelector("#comp-Score");


const getComputerChoice = () => {
    const randomChoice = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*randomChoice.length);
    return randomChoice[randomIdx];
}
const drawGame = () => {
    msg.innerText = "it's a Tie! Play again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "#4B0082";
}

const showWinner = (userWin, userChoiceId, computerChoiceId) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! your ${userChoiceId} beats ${computerChoiceId}`;
        msg.style.backgroundColor = "Green";
        msg.style.color = "#F5F5DC";
    }
    else{
        computerScore++;
        computerScorepara.innerText = computerScore;
        msg.innerText = `You lose! ${computerChoiceId} beats your ${userChoiceId}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "#FFC5CB";
    }
}
const playGame = (userChoiceId) => {
    console.log("user choice is ", userChoiceId);
    const computerChoiceId =  getComputerChoice();
    console.log("Computer choice is ", computerChoiceId);

    if(userChoiceId === computerChoiceId){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoiceId === "rock"){
            userWin = computerChoiceId === "paper" ? false : true;
        }
        else if(userChoiceId === "paper"){
            userWin = computerChoiceId === "scissors" ? false : true;
        }
        else{
            userWin = computerChoiceId === "rock" ? false : true;
        }
        showWinner(userWin, userChoiceId, computerChoiceId);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id");
        //console.log("choice was clicked" , userChoiceId);
        playGame(userChoiceId);
    });
});
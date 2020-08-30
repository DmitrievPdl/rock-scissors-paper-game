let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div =  document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div =  document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissor_div =  document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random() * Math.floor(3));
    return choices[randomNumber];
}




function game(userChoice){
    const computerChoice = getComputerChoice();
    switch ( userChoice +  computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;       
    }
}



rock_div.addEventListener('click', function(){
    game("r");
});

paper_div.addEventListener('click', function(){
    game("p");
})

scissor_div.addEventListener('click', function(){
    game("s");
})



function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`

}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost :c`
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw`
}


function convertToWord(letter){
    if (letter === 'r') return "Rock";
    if (letter === 's') return "Scissor";
    if (letter === 'p') return "Paper";
}
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#computer");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats computers ${computerChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`computer win! computer ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    
    msg.innerText="game draw!";
    msg.style.backgroundColor="rgb(6, 6, 64)";
}

const playGame=(userChoice)=>{
const computerChoice=genComputerChoice();

if(userChoice===computerChoice){
    //draw game
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
     userWin=computerChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=computerChoice==="scissors"?false:true;
    }
    else{
        userWin=computerChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,computerChoice);
}
}




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
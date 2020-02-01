var r,score=0,grade=1,lastHumanChoice,humanChoice;
var lastWinner = "noone",lastComputerChoice = "rock";
function rock(){
    document.getElementById("myChoice").innerHTML="<img src='rock.png'>";
    humanChoice = "rock";
    judge("rock");
    lastHumanChoice = "rock";
}

function scissors() {
        document.getElementById("myChoice").innerHTML = "<img src='scissors.png'>";
        humanChoice = "scissors";
        judge("scissors");
        lastHumanChoice = "scissors";
}

function paper(){
    document.getElementById("myChoice").innerHTML="<img src='paper.png'>";
    humanChoice = "paper";
    judge("paper");
    lastHumanChoice = "paper"
}

function judge(myChoice){
    r = 3*Math.random();
    var computerResult;
    if(grade==1){
        document.getElementById("computerName").innerHTML="电脑大锤哥";
        computerResult = onlyRocker();
    }
    else if(grade==2){
        computerResult = learnFromHuman();
    }
    else if(grade==3){
        computerResult = winnerAgain();
        lastComputerChoice = computerResult;
    }
    else if(grade==4) {
        lastComputerChoice = computerResult;
        computerResult = loseChange();
    }
    else if(grade==5) {
        computerResult = lovePaper();
    }
    else if(grade==6) {
        computerResult = randomPlayer();
    }
    else if(grade==7) {
        computerResult = cheatingGrandpa(humanChoice);
    }

    if(myChoice=="rock"){
        if(computerResult =="rock"){
            lastWinner = "noone";
        }
        else if(computerResult =="scissors"){
            lastWinner = "human";
            score+=1;
        }
        else if(computerResult =="paper"){
            lastWinner = "com";
            score-=1
        }
    }
    else if(myChoice=="scissors"){
        if(computerResult =="rock"){
            lastWinner = "com";
            score-=1;
        }
        else if(computerResult =="scissors"){
            lastWinner = "noone";
        }
        else if(computerResult =="paper"){
            lastWinner = "human";
            score+=1;
        }
    }
    else{
        if(computerResult =="rock"){
            lastWinner = "human";
            score+=1;
        }
        else if(computerResult =="scissors"){
            lastWinner = "com";
            score-=1
        }
        else if(computerResult =="paper"){
            lastWinner = "noone";
        }
    }
    if(score>=5){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关,积分："+score;
    if(grade>7){
        document.getElementById("result").innerHTML="NB,总通关了！";
    }
}

function go(){
}

function computerChoice() {
    if(r<1){
        document.getElementById("computerChoice").innerHTML="<img src='rock.png'>";
        return "rock";
    }
    else if(r<2){
        document.getElementById("computerChoice").innerHTML="<img src='scissors.png'>";
        return "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src='paper.png'>";
        return "paper";
    }
}
function onlyRocker() {
    document.getElementById("computerName").innerHTML="电脑大锤哥";
    document.getElementById("computerChoice").innerHTML = "<img src='rock.png'>";
    return "rock";
}

function learnFromHuman(){
    document.getElementById("computerName").innerHTML="模仿帝";
    document.getElementById("computerChoice").innerHTML="<img src='"+lastHumanChoice+".png'>";
    return lastHumanChoice;
}
function winnerAgain(){
    document.getElementById("computerName").innerHTML="赢了还出";
    if(lastWinner=="com"){
        document.getElementById("computerChoice").innerHTML="<img src='"+lastComputerChoice+".png'>";
        return lastComputerChoice;
    }
    else{
        var temp = computerChoice();
        document.getElementById("computerChoice").innerHTML="<img src='"+temp+".png'>";
        return temp;
    }
}
function loseChange(){
    document.getElementById("computerName").innerHTML="输了就换";
    if(lastWinner=="human"){
        var temp = getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML="<img src='"+temp+".png'>";
        return temp;
    }
    temp = computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='"+temp+".png'>";
    return temp;
}
function getResultExclude(exclusion){
    var temp = computerChoice();
    if(temp==exclusion){
        return getResultExclude(exclusion);
    }
    else{
        return temp;
    }
}
function lovePaper(){
    var temp;
    if(r<0.7){
        document.getElementById("computerChoice").innerHTML="<img src='rock.png'>";
        temp = "rock";
    }
    else if(r<1.4){
        document.getElementById("computerChoice").innerHTML="<img src='scissors.png'>";
        temp = "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src='paper.png'>";
        temp = "paper";
    }
    document.getElementById("computerName").innerHTML="爱布先生";
    document.getElementById("computerChoice").innerHTML="<img src='"+temp+".png'>";
    return temp;
}
function randomPlayer(){
    var temp;
    if(r<1){
        document.getElementById("computerChoice").innerHTML="<img src='rock.png'>";
        temp = "rock";
    }
    else if(r<2){
        document.getElementById("computerChoice").innerHTML="<img src='scissors.png'>";
        temp = "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src='paper.png'>";
        temp = "paper";
    }
    document.getElementById("computerName").innerHTML="随心所欲";
    document.getElementById("computerChoice").innerHTML="<img src='"+temp+".png'>";
    return temp;
}
function cheatingGrandpa(humanChoice){
    document.getElementById("computerName").innerHTML="作弊爷爷";
    if(humanChoice=="rock"){
        document.getElementById("computerChoice").innerHTML="<img src='paper.png'>";
        return "paper";
    }
    else if(humanChoice=="scissors") {
        document.getElementById("computerChoice").innerHTML="<img src='rock.png'>";
        return "rock";
    }
    else if(humanChoice=="paper") {
        document.getElementById("computerChoice").innerHTML="<img src='scissors.png'>";
        return "scissors";
    }
}

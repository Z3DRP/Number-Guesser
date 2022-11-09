'use strict';

let generateRandomNumber = () => {
    return Math.trunc(Math.random()*20) + 1;
}

let highScore = 0;
let score = 20;
let secretNumber = generateRandomNumber();

const displayMessage = function(msg) {
    document.querySelector(".message").textContent = msg;
}


//check btn
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        //document.querySelector(".message").textConent = "🤬 No number!";
        displayMessage("🤬 No number!")
    } else if (guess === secretNumber) {
        setWinnerColors();
        document.querySelector(".number").textContent = secretNumber;
        //document.querySelector(".message").textContent = "🎉 Correct Number!";
        displayMessage("🎉 Correct Number!");

        if (score > highScore) {
            document.querySelector(".highscore").textContent = score;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent =
            //   guess > secretNumber ? "🐱‍🏍 To high!" : "📉 To low!";
            displayMessage(guess > secretNumber ? "🐱‍🏍 To high!" : "📉 To low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent = "👎 You loose, your score is 0!!!";
            displayMessage("👎 You loose, your score is 0!!!");
            document.querySelector(".score").textContent = 0;
        }

    }
});

// again btn
document.querySelector(".again").addEventListener("click", function() {
    //generateRandomNumber();
    secretNumber = Math.trunc(Math.random()*20) + 1;
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".number").value = " ";
    
    document.querySelector(".score").textContent = 20;
    // setStartColors();
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
});


function decreseScore(_score) {
    //_score--;
    _score--;
    document.querySelector(".score").textContent == _score;
}

function setMessage(msg){
    document.querySelector(".message").textContent = msg;
}

function getLoserMsg() {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent == "👎 You loose, your score is 0!!!";
}

// manipulate css so that when player wins background change color
function setWinnerColors() {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
}

function setStartColors() {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
}



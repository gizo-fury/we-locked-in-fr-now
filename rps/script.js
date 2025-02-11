
var options = ['rock', 'paper','scissors']
var playerdisplay = document.getElementById('player')
var computerdisplay = document.getElementById('computer')
var resultdisplay = document.getElementById('result')
let result;

function playerchoice(temporaryplayerchoiceholder){
    computerchoice = options[Math.floor(Math.random()*3)];
    if (temporaryplayerchoiceholder === computerchoice){
        result = "IT'S A TIE"
    }
    else{
        switch(temporaryplayerchoiceholder){
            case 'rock':
               result = (computerchoice === 'paper') ? "YOU LOSE" : "YOU WIN";
                
                case 'paper':
                    result = (computerchoice === 'scissors') ? "YOU LOSE" : "YOU WIN";
                    
                    case 'scissors':
                        result = (computerchoice === 'rock') ? "YOU LOSE" : "YOU WIN";
                        
        }
        playerdisplay.textContent = `PLAYER: ${temporaryplayerchoiceholder}`;
        computerdisplay.textContent = `COMPUTER: ${computerchoice}`
        resultdisplay.textContent = `RESULT: ${result}`
    }

    
}


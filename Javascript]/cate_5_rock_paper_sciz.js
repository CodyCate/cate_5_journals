
alert("ROCK! PAPER! SCISSORS!");
var playerchoice;
var computerchoices;
//var lose_audio = new Audio('poop.mp3');
var Night = true;


//lose_audio.play();

function player(i) {
    playerchoice = i;
    if(i == 0) {
        document.getElementById("therock").innerHTML=("Player chose ROCK");
        //document.getElementById("playerside").style.backgroundImage = "url('rock.png')";
    } else if (i == 1) {
        document.getElementById("paper").innerHTML = "Player chose PAPER"; 
       // document.getElementById("playerside").style.backgroundImage = "url('paper.png')";
    } else {
        document.getElementById("thesciz").innerHTML = "Player chose SCISSORS";
        //document.getElementById("playerside").style.backgroundImage = "url('scissors.png')";
    }
    
    Computer();
};
    
    function Computer() {

        var computer_choice = Math.floor((Math.random() * 3) + 0);
        computerchoices = computer_choice;
        alert("HI");
        //lose_audio.play();
        if(computer_choice == 0) {
            alert("The computer chose PAPER");
         //   document.getElementById("computerside").style.backgroundImage = "url('paper.png')";
        } else if(computer_choice == 1) {
            alert("The computer chose ROCK!");
           // document.getElementById("computerside").style.backgroundImage = "url('rock.png')";
        } else {
            alert("The computer chose Scissors!");
            //document.getElementById("computerside").style.backgroundImage = "url('scissors.png')";
        }
         //window.setTimeout("Animation()", 2000);
        Animation();
    };
    
       
        
        function Animation() {
            if(computerchoices == 0 && playerchoice == 1) {
                alert("Tie!");
            } else if(computerchoices == 0 && playerchoice == 0) {
                alert("You lose");
                compscore++;
                document.getElementById("cscore").innerHTML= "WINS: " + compscore;
            } else if(computerchoices == 0 && playerchoice == 2) {
                alert("You win");
                playerscore++;
                document.getElementById("pscore").innerHTML="WINS: " + compscore;
            } else if(computerchoices == 1 && playerchoice == 0) {
                alert("Tie!");
            } else if(computerchoices == 1 && playerchoice == 1) {
                alert("You win!");
                playerscore++;
                document.getElementById("pscore").innerHTML="WINS: " + compscore;
            } else if(computerchoices == 1 && playerchoice == 2) {
                alert("You lose!");
                compscore++;
                document.getElementById("cscore").innerHTML= "WINS " + compscore;
            } else if(computerchoices == 2 && playerchoice == 0) {
                alert("You win!");
                playerscore++;
                document.getElementById("pscore").innerHTML="WINS: " + compscore;
            } else if(computerchoices == 2 && playerchoice == 1) {
                alert("You lose!");
                compscore++;
                document.getElementById("cscore").innerHTML= "WINS " + compscore;
            } else if(computerchoices == 2 && playerchoice == 2) {
                alert("Tie!");
            } else {
                alert("REDO!");
            }
        };


var player_choice;


function Player_rock() {
    var computer_choice = Math.floor((Math.random() * 3) + 1);
    var auto;
    document.write(computer_choice);
    if(computer_choice == 0) {
        auto = "rock";
        alert("TIE!");
    } else if(computer_choice == 1) {
        auto = "paper";
        alert("You win!");
    } else {
        auto = "scissors";
        alert("You lose!");
    }
};

function Player_paper() {
    var computer_choice2 = Math.floor((Math.random() * 3) + 1);
    var comp;
    
    if(computer_choice2 == 0) {
        comp = "rock"
        alert("You win!");
    } else if(computer_choice2 == 1) {
        comp = "scissors";
        alert("You lose");
    } else {
        comp = "paper";
        alert("Tie");
    }
};

function Player_scissors() {
    var computer_choice3 = Math.floor((Math.random() * 3) + 1);
    var autocomp;
    
    if(computer_choice3 == 0) {
        autocomp = "paper";
        alert("You WIN!");
    } else if(computer_choice3 == 1) {
        autocomp = "scissors";
        alert("TIE!");
    } else {
        autocomp = "rock";
        alert("YOU LOSE!");
    }
};






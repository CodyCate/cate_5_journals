var counter = 4;

function guess(){
     location.reload();
    var num = parseInt(Math.random() * 20 + 1);
      alert(" write a number");
    var userGuess = prompt("input a guess number between 1 to 20");
    while(userGuess!=num&&counter > 1) {
        if(num == userGuess){
            alert("Hey thats pretty goood. seems like your a cool cat now 10/10 m8!");
        }else if (counter < 1){ 
            userGuess= num;   
        }
            else {
            alert("Not matched. Number was " + num);
            userGuess= num;
        }
    }
};







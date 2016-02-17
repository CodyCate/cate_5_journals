function guess(){
    var num = parseInt(Math.random() * 20 + 1);
    var userGuess = prompt("input a guess number between 1 to 20");
    if(isNaN(userGuess)) {
      alert(" write a number");
    } else {
        if(num == userGuess){
            alert("Hey thats pretty goood. seems like your a cool cat now 10/10 m8!");
        } else {
            alert("Not matched. Number was " + num);
        }
    }
}
document.getElementById("p2").style.color = "red";

document.write("this is how we math in javascript.")

var k = prompt("pick a number");
var r = prompt("pick another number");
var d = k + r;
var num1 = parseInt(k);
var num2 = parseInt(r);
var num3 = num1 +num2;
/*we parseint'ed so the varibles would be treated as INTS and not strings */ 
document.write("k is " + k + " r is" + r + " d is k + r ant it's " + d);
document.write(" <br> multiplication: <br>")
document.write(k * r);
document.write(k / r);
document.write(" <br>adding:/n <br>")
document.write(k + r);
document.write("\n <br>subtraction:/n <br>");
document.write(k - r);
document.write("<br>this is num1 "  + num1 );
document.write("<br>this is num2 " + num2  );
num1++;
document.write("<br>this is num1 again " +num1++ +"<br>" );
num2++;
document.write("<br>this is num1 again" +num2 + "<br>");
document.write("<br>this is num2 " + (++num2) +"<br>");
document.write("this is k" + k);
document.write("this is r" + r);

num1 = 42;

num1 +=5;
document.write(k);
num1 -=5;
document.write(k);
num1 /=5;
document.write(k);
/* L337 h@x0r5 use conditionals*/

if ( k == r )
    
document.write("if k and r are the same");

} else if (k < r) {
document.write("<br>k is less than r");
} else if (k > r){
document.write("<br>k larger then r ");
}
}
else {
    document.write("this should never happen ")
}


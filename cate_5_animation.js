var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d");
 
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
var angle = 200;
var x = 100;
var y = 200;
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function drawCircle() {
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
     
    mainContext.fillStyle = "#7BFEFF";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
 
    mainContext.beginPath();
     
    var radius = 205 + 350 * Math.abs(Math.cos(angle));
    mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
      
    mainContext.closePath();
    
       for (i = 0; i < 6; i++) {
        mainContext.beginPath();
        mainContext.fillStyle="pink";
        mainContext.arc(4, 5, radius, 0, Math.PI * 2, false);
        //mainContext.arc(12 *i,12+i*41,5,0,2*Math.PI);
        mainContext.fill();
        mainContext.closePath();
        mainContext.rotate(100);
        mainContext.translate(50, 60);
    }
    angle += Math.PI / 69;
    x += 5;
    y -= 1;
    mainContext.fillStyle = "orange";
    mainContext.fill();
    requestAnimationFrame(drawCircle);
    
    if(x > 40) {
        x -= 5;
    }
    
    if(y < 232) {
        y += 1;
    }
    
    if(x < 343) {
        x+=5;
    }
    
    if(y >223) {
        y-=5;
    }
}

drawCircle();
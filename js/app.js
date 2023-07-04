let xPos = 0;
let yPos = 150;
let xSpeed = 5;
let ySpeed = 1;


function setup(){
    var red = "#000";
    createCanvas(800,600);


}

function draw(){
    background(80,199,199)
    circle(xPos, yPos,30);
    xPos = xPos + xSpeed;

    if(xPos > 800){
        xPos = 0;
    }
}
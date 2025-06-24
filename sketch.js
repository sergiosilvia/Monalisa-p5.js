function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background('orange');
  fill("#03A9F4");
  stroke(100);
  strokeWeight(4);
  circle(200,200,300);//rosto
  fill("white");
  circle(150,150,50);
  circle(250,150,50);
  line(150,270,250,270);
  fill("blue");
  triangle(200,180,170,220,220,220);
  line(123,115,178,113);
  line(225,116,279,106);
 //circle(150,150,10);//pupila esquerda
  //circle(250,150,10);//pupila direita
  olhoX = map(mouseX,0,400,132,166);
  olhoY = map(mouseY,0,400,130,170);
  
  circle(olhoX,olhoY,10);
  circle(olhoX+100,olhoY,10);
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
    
     
    
     }
}
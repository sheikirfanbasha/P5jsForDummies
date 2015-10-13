function setup() {
  // uncomment this line to make the canvas the full size of the window
   createCanvas(windowWidth, windowHeight);
}
var x = 1;
function draw() {
  // draw stuff here
  frameRate(1);
  x = x << 1;
  if(x > 4){
  	x = 1;
  }
  if(x == 1){ //In binary 001
  	fill(255, 0, 0);
  }
  if(x == 2){//In binary 010
  	fill(0, 255, 0);
  }
  if(x == 4){//In binary 100
  	fill(255, 94, 34);
  }
   ellipse(width/2, height/2, 50, 50);
}
const X_KEY = 88 //most of the variables needed for this code
const Z_KEY = 90
const I_KEY = 73
r = 100
g = 100
b = 100
clicks = 0
score = 0
misses = 0
acc = 100
c = 255 //background color
paused = false



function preload() {
  font = loadFont('font.ttf'); //roboto mono font 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noCursor();
  radius = 15 //some more variables
  xPos = width / 4
  yPos = height / 4
  sizeW = width / 4
  sizeH = height / 4


}

function draw() {
  background(c);

  //code below is for the mouse cursor

  if (mouseIsPressed) { //makes mouse cursor get larger when you click

    if (radius < 17) {
      radius += 2
    }

  } else {
    radius = 15
  }

  if (keyIsDown(X_KEY)) { //makes mouse cursor get larger when you press X

    if (radius < 17) {
      radius += 2
    }
  }

  if (keyIsDown(Z_KEY)) { //when you press the z key the colour of the rectrangle changes

    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
  }



  fill(r, g, b); //fill colour for rectangle

  rect(xPos, yPos, sizeW, sizeH); //the actual rectangle that you click on





  //extra variables

  misses = clicks - score
  acc = int((score / clicks) * 100)

  // code below is for the cursor

  strokeWeight(10);
  stroke((r * 2) / 1.7, (g * 2) / 1.7, (b * 2) / 1.7);

  line(mouseX, mouseY, pmouseX, pmouseY); //this draws the line that follows the cursor

  fill(r * 0.8, g * 0.8, b * 0.8);
  strokeWeight(3);

  ellipse(mouseX, mouseY, radius); //custom cursor

  noStroke();
  //code below is for all of the text

  textSize(15)
  textAlign(CENTER, CENTER);
  textFont(font, 15)

  fill(r / 2, g / 2, b / 2); //fill color for the stats

  text('score: ' + score, width / 4 - width / 8, height - height / 8);//hits/score

  text('misses:' + misses, width / 2 - width / 8, height - height / 8); //misses

  text('clicks: ' + clicks, width / 2 + width / 8, height - height / 8); //clicks

  text('accuracy: ' + acc + '%', width - width / 8, height - height / 8); //accuracy

  text('John', width - width / 8, height - height / 16)//my name

  textSize(10);

  text("hold 'i' for instructions", width / 2, 0 + height / 32); //instructions

  if (keyIsDown(I_KEY)) { //code that is used to show the instructions
    background(c)

    textSize(12);
    //all of the code below is the text that shows up when you hold 'i' for instructions

    text("Click on the rectangle and try to improve your aim!", width / 2, 0 + height / 8)

    text("Use the 'x' key as an alternative to clicking.", width / 2, 0 + height / 4)

    text("Up and down arrows change the difficulty of the game.", width / 2, 0 + height / 4 + height / 8)

    text("Number keys 1 through 0 can be used to change to a preset theme.", width / 2, 0 + height / 2)

    text("Holding 'z' will change the theme to a random colour.", width / 2, 0 + height / 2 + height / 8)

    text("Press 'p' to pause and 'r' to reset your stats", width / 2, 0 + height / 2 + height / 4)

  }

  if (paused === true) { //the text that shows up when you pause
    background(c);
    text('PAUSED', width / 2, height / 2);
    text("press 'o' to continue", width / 2, height / 2 + height / 8);

  }


}

//code below is for what happens when you click or press X

function mouseReleased() { //all the things that happen when you let go of the mouse
  if ((mouseX > xPos) && (mouseX < xPos + sizeW) && (mouseY > yPos) && (mouseY < yPos + sizeH)) { //if your mouse is inside the rectangle and you click it tells the rectangle to move

    fill(255, 0, 0);

    xPos = random(0, width - sizeW);
    yPos = random(0, height - sizeH);

    score += 1

  }
  clicks += 1
}

function keyReleased() { // all the things that happen when you let go of certain keys
  if ((mouseX > xPos) && (mouseX < xPos + sizeW) && (mouseY > yPos) && (mouseY < yPos + sizeH)) { //if your mouse is in the rectangle and you press 'x', it tells the rectangle to move
    if (keyCode === 88) {
      fill(255, 0, 0);

      xPos = random(0, width / 2 + width / 8);
      yPos = random(0, height / 2 + height / 8);
      score += 1

    }
  }
  if (keyCode === 88) { //if you release the x key make clicks go up by one
    clicks += 1

  }

  if (keyCode === 40) { //if you release the down arrow make rectangle size go down

    sizeH = sizeH / 2
    sizeW = sizeW / 2

  }

  if (keyCode === 38) { //if you release the up arrow make rectangle size increase

    sizeH = sizeH * 2
    sizeW = sizeW * 2

  }

  //code below is for the themes

  if (keyCode === 49) { //teal

    r = 180
    g = 255
    b = 255

  }

  if (keyCode === 50) {//maroon

    r = 178
    g = 60
    b = 60

  }

  if (keyCode === 51) {//light green

    r = 200
    g = 255
    b = 200

  }

  if (keyCode === 52) {//light blue

    r = 150
    g = 200
    b = 255

  }

  if (keyCode === 53) {//red

    r = 255
    g = 50
    b = 0

  }

  if (keyCode === 54) {//light pink

    r = 255
    g = 150
    b = 180

  }

  if (keyCode === 55) {//lime green

    r = 57
    g = 255
    b = 20

  }

  if (keyCode === 56) {//peach

    r = 255
    g = 239
    b = 213

  }

  if (keyCode === 57) {//magenta

    r = 255
    g = 0
    b = 255

  }

  if (keyCode === 48) {//black

    r = 20
    g = 20
    b = 20

  }

  if (keyCode === 80) {//if you press 'p' it pauses
    paused = true
  }

  if (keyCode === 79) { //if you press 'o' it unpauses
    paused = false
  }

  if (keyCode === 82) { //if you press 'r' it resets
    score = 0
    clicks = 0

  }

}

function doubleClicked() { //when you double click the background is changed to a random shade of grey
  c = (random(0, 256));
}
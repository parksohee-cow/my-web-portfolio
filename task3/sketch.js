let charX = 300; 
let charY = 180; 
let isWinking = false; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240); 

  let hover = sin(frameCount * 0.05) * 10;

  noStroke();
  fill(30); 
  rect(charX - 100, charY + hover - 100, 200, 300, 20); 

  fill(255, 230, 200);
  rect(charX - 15, charY + hover + 110, 30, 40);
  
  fill(120, 180, 220);
  stroke(50);
  strokeWeight(2);
  rect(charX - 75, charY + hover + 150, 150, 100, 20, 20, 0, 0); 

  stroke(0);
  strokeWeight(2);
  fill(255, 230, 200); 
  ellipse(charX, charY + hover, 200, 250); 

  noStroke();
  fill(30);
  arc(charX, charY + hover - 50, 200, 150, PI, TWO_PI); 

  noFill();
  stroke(80);
  strokeWeight(3);
  ellipse(charX - 35, charY + hover + 10, 60, 60); 
  ellipse(charX + 35, charY + hover + 10, 60, 60); 
  line(charX - 5, charY + hover + 10, charX + 5, charY + hover + 10); 

  fill(0);
  noStroke();
  if (isWinking) {
    stroke(0);
    strokeWeight(3);
    line(charX - 45, charY + hover + 10, charX - 25, charY + hover + 10);
    noStroke();
    circle(charX + 35, charY + hover + 10, 10);
  } else {
    let mx = map(mouseX, 0, width, -3, 3);
    let my = map(mouseY, 0, height, -3, 3);
    circle(charX - 35 + mx, charY + hover + 10 + my, 10);
    circle(charX + 35 + mx, charY + hover + 10 + my, 10);
  }

  fill(255, 120, 120);
  stroke(100); 
  strokeWeight(1);
  arc(charX, charY + hover + 70, 50, 20, 0, PI); 

  fill(180, 130, 100); 
  noStroke();
  circle(charX - 30, charY + hover + 75, 5); 
  circle(charX + 30, charY + hover + 75, 5); 
}

function mousePressed() {
  isWinking = true;
}

function mouseReleased() {
  isWinking = false;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) charX -= 10;
  if (keyCode === RIGHT_ARROW) charX += 10;
  if (keyCode === UP_ARROW) charY -= 10;
  if (keyCode === DOWN_ARROW) charY += 10;

  if (key === 's' || key === 'S') {
    saveGif('my_character_motion', 3);
  }
}
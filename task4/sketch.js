function setup() {
  createCanvas(600, 400);
  saveGif('my_abstract_art', 5, { delay: 0.5 });
}

function draw() {
  background(10, 10, 50);
  
  noStroke();
  fill(255, 230, 0);
  let moonSize = 75 + sin(frameCount * 0.05) * 10; 
  ellipse(100, 80, moonSize, moonSize);
  
  fill(0, 180, 255, 150);
  rect(50, 200, 80, 200);
  
  fill(255, 150, 0);
  rect(200, 150, 100, 250, 10);
  
  fill(50, 200, 50, 180);
  rect(150, 250, 120, 150);
  
  fill(180, 100, 255);
  triangle(400, 100, 500, 400, 300, 400);
  
  let fromColor = color(255, 100, 200, 200);
  let toColor = color(150, 50, 255, 200);
  let colorInterp = map(sin(frameCount * 0.03), -1, 1, 0, 1);
  let dynamicColor = lerpColor(fromColor, toColor, colorInterp);
  fill(dynamicColor);
  rect(350, 200, 90, 200);
  
  fill(0, 50, 150);
  ellipse(300, 410, 600, 100);
  
  stroke(255, 255, 100);
  strokeWeight(2);
  line(0, 180, 600, 350);
  
  stroke(100, 255, 255);
  strokeWeight(3);
  line(500, 50, 100, 380);
  
  noStroke();
  fill(255);
  rect((450 + frameCount * 0.5) % 600, 80, 5, 5);
  rect((520 + frameCount * 0.5) % 600, 120, 3, 3);
  rect((300 + frameCount * 0.5) % 600, 50, 4, 4);
}
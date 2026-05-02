let x = 100;
let y = 100;

function setup() {
  const canvas = createCanvas(400, 300);
  canvas.parent("game-container");
}

function draw() {
  background(30);

  fill(255);
  circle(x, y, 40);

  if (keyIsDown(LEFT_ARROW)) x -= 3;
  if (keyIsDown(RIGHT_ARROW)) x += 3;
  if (keyIsDown(UP_ARROW)) y -= 3;
  if (keyIsDown(DOWN_ARROW)) y += 3;
}
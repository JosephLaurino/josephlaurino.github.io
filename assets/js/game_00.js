let x = 100;
let y = 100;

function setup() {
  const canvas = createCanvas(400, 300);
  canvas.parent("game-container");
}

function draw() {
  background(30);

  // Smoothly follow the mouse
  x += (mouseX - x) * 0.08;
  y += (mouseY - y) * 0.08;

  fill(255);
  circle(x, y, 40);
}
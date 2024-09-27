let recW = 2000;
let recH = 2500;

function setup() {
  createCanvas(recW, recH);
  noStroke();
  push();
  fill(255, 234, 0);
  rect(0, 0, recW, recH);

  push();
  for (let n = 0; n <= 2000; n += 250) {
    for (let b = 0; b <= 2500; b += 250) {
      fill(0);
      ellipse(n, b, 80);
    }
  }
  pop();

  push();
  for (let n = 125; n <= 2000; n += 250) {
    for (let b = 125; b <= 2500; b += 250) {
      fill(0);
      ellipse(n, b, 50);
    }
  }
  pop();
  
}

function draw() {}

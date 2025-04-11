import p5 from 'p5';

let bunnyImage: p5.Image;

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.preload = preload;
  sketch.draw = draw;
});

function preload() {
  bunnyImage = p.loadImage('https://cddataexchange.blob.core.windows.net/data-exchange/bunny.png');
}

function setup() {
  p.createCanvas(400, 400);
}

function draw() {
  p.background('white');
  p.stroke('white');
  p.noFill();
  p.strokeWeight(2);

  for (let j = 0; j <= 5000; j += 100) {
    for (let i = 0; i <= 500; i += 100) {
      p.image(bunnyImage, i, j, 100, 100, i, j, 100, 100);
      p.rect(i, j, 100, 100);
    }
  }
}

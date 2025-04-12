import p5 from 'p5';

const amountOfCells = 4;

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

  const cellWidth = p.width / amountOfCells;
  const cellHeight = p.height / amountOfCells;

  const imgCellWidth = bunnyImage.width / amountOfCells;
  const imgCellHeight = bunnyImage.height / amountOfCells;

  for (let i = 0; i < amountOfCells; i++) {
    for (let j = 0; j < amountOfCells; j++) {
      const x = j * imgCellWidth;
      const y = i * imgCellHeight;
      const dx = j * cellWidth;
      const dy = i * cellHeight;

      p.image(bunnyImage, dx, dy, cellWidth, cellHeight, x, y, imgCellWidth, imgCellHeight);
      p.rect(dx, dy, cellWidth, cellHeight);
    }
  }
}

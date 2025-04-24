import p5 from 'p5';

let bunnyImage: p5.Image;
const TILES = 3;

const randomTilesX: number[][] = [];
const randomTilesY: number[][] = [];

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.draw = draw;
  sketch.preload = preload;
});

function preload() {
  bunnyImage = p.loadImage('assets/bunny.png');
}

function setup() {
  p.createCanvas(500, 500);
  p.background('red');

  const tileSize = 500 / TILES;
  for (let x = 0; x < TILES; x++) {
    randomTilesX[x] = [];
    randomTilesY[x] = [];
    for (let y = 0; y < TILES; y++) {
      randomTilesX[x][y] = Math.floor(p.random(TILES)) * tileSize;
      randomTilesY[x][y] = Math.floor(p.random(TILES)) * tileSize;
    }
  }
}

function draw() {
  p.noFill();

  p.stroke('white');
  p.strokeWeight(2);

  for (let x = 0; x < TILES; x++) {
    for (let y = 0; y < TILES; y++) {
      if (x !== TILES - 1 || y !== TILES - 1) {
        const imageX = randomTilesX[x][y];
        const imageY = randomTilesY[x][y];

        const tileSize = 500 / TILES;

        p.image(bunnyImage, tileSize * x, tileSize * y, tileSize, tileSize, imageX, imageY, tileSize, tileSize);

        p.rect(imageX, imageY, tileSize, tileSize);
      }
    }
  }
}

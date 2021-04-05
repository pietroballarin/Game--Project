const width = 600;
const height = 650;

let background = new Background()
let player = new Player()
let game = new Game()


function setup() {
    createCanvas(width, height);
}

function draw() {
    clear();
    background.draw();
    player.draw();
    game.draw();
}

function preload() {
    player.preload();
    background.preload();
    game.preload();
}

function keyPressed() {
    player.keyPressed(keyCode); 
}


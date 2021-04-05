const width = 800;
const height = 600;

let background = new Background
let player = new Player


function setup() {
    createCanvas(width, height);
    
}

function draw() {
    clear();
    background.draw();
    player.draw()
}

function preload() {
    player.preload()
    background.preload();
}

function keyPressed() {
    player.keyPressed(keyCode) 
}


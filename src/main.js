const width = 400;
const height = 650;

let background = new Background()
let player = new Player()
let game = new Game()


function setup() {
    createCanvas(width, height);
    stroke('red');
    strokeWeight(4);
    rect(400, 400, 650, 650)
    game.setup();
}

function preload() {
    player.preload();
    background.preload();
    game.preload();
    
}

function draw() {
    
    clear();
    background.draw();
    player.draw();
    game.draw(player);
    
}

function keyPressed() {
    player.keyPressed(keyCode); 
}




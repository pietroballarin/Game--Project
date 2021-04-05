const width = 600;
const height = 600;

let background = new Background


function setup() {
    createCanvas(width, height);
    
}

function draw() {
    clear();
    background.draw();
}

function preload() {
    background.preload();
}



const width = 400;
const height = 650;
let background = new Background();
let player = new Player();
let game = new Game();
let obstacle = new Obstacle();
let timer;
let counter = 90;
let seconds, minutes;

// let song;

function preload() {
    player.preload();
    background.preload();
    game.preload();
 // song = loadSound('resources/music/music.mp3');  
}

function setup() {
    let canvas = createCanvas(width, height);
    canvas.parent('canvas');
    game.setup();
    setInterval(timeIt, 1000);
}

function draw() {
    clear();
    background.draw();
    player.draw();
    game.draw(player);
    if (counter <= 0) {
        noLoop();
    }
}

function keyPressed() {
    player.keyPressed(keyCode); 
}


function timeIt() {
    if (counter <= 2000) {
      counter--;
    }
    minutes = floor(counter/60);
    seconds = counter % 60;
    document.querySelector('#timer').innerText = minutes + ":" + seconds;
    if (counter <= 0) {
        displayWin();
    }
    if (counter <= 0) hideCounter();
    if (counter <= 0) hideCanvas();
}

function displayWin() {
    const winmsg = document.querySelector('#winmsg');
    winmsg.classList.remove('hidden');
}

function displayGameOver() {
    const gameoverMsg = document.querySelector('#gameover-msg');
    gameoverMsg.classList.remove('hidden');
}

function hideCounter() {
    const counterDisplay = document.querySelector('#timer');
    counterDisplay.classList.add('hidden');
}

function hideCanvas() {
    const displayHidden = document.querySelector('#canvas');
    displayHidden.classList.add('hidden');
}
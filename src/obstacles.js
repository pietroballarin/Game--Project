

class Obstacle1 {

    constructor() {
        this.x = 220;
        this.y = 110
    }

    draw() {
        image(this.imgObst1, this.x, this.y, 160, 80)
    }

    preload() {
        this.imgObst1 = loadImage('/resources/player/car.png')
    }
}

class Obstacle2 {
    
}

class Obstacle3 {
    
}

class Obstacle4 {
    
}

console.log('hey')
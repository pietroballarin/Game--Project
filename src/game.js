let obstacle = new Obstacle
let obstacle1 = new Obstacle1
let obstacle2 = new Obstacle2
let obstacle3 = new Obstacle3
class Game {

    constructor() { 

    }

    setup() {
        this.obstacles = []
        this.obstacles1 = []
        this.obstacles2 = []
        this.obstacles3 = []
    }
    
    preload() {
        this.imgObst1 = loadImage('/resources/player/car.png')
        this.imgObst2 = loadImage('/resources/player/car.png')
        this.imgObst3 = loadImage('/resources/player/car.png')
        this.imgObst4 = loadImage('/resources/player/car.png')   
    }

    draw() {
        if (frameCount % 200 === 7) {
            console.log(frameCount)
            this.obstacles.push(new Obstacle(this.imgObst1))
        }
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw();
        })

        if (frameCount % 250 === 7) {
            console.log(frameCount)
            this.obstacles1.push(new Obstacle1(this.imgObst2))
        }
        this.obstacles1.forEach(function (obstacle1) {
            obstacle1.draw();
        })

        if (frameCount % 270 === 7) {
            console.log(frameCount)
            this.obstacles2.push(new Obstacle2(this.imgObst3))
        }
        this.obstacles2.forEach(function (obstacle2) {
            obstacle2.draw();
        })

        if (frameCount % 200 === 7) {
            console.log(frameCount)
            this.obstacles3.push(new Obstacle3(this.imgObst4))
        }
        this.obstacles3.forEach(function (obstacle3) {
            obstacle3.draw();
        })

        

        
    }

    

}
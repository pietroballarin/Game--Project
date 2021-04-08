class Game {

    setup() {
        this.obstacles = [];
        this.obstacles1 = [];
        this.obstacles2 = [];
        this.obstacles3 = [];
    }
    
    preload() {
        this.imgObst1 = loadImage('resources/obstacles/obst1.png');
        this.imgObst2 = loadImage('resources/obstacles/obst2.png');
        this.imgObst3 = loadImage('resources/obstacles/obst3.png');
        this.imgObst4 = loadImage('resources/obstacles/obst4.png'); 
    }

    draw(player) {
        if (frameCount % 200 === 7) {
            this.obstacles.push(new Obstacle(80, -120, 6, this.imgObst1));
        }
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw();
            obstacle.detectCollision(player);   
        });
        if (frameCount % 250 === 7) {
            this.obstacles1.push(new Obstacle(140, -620, 6, this.imgObst2));
        }
        this.obstacles1.forEach(function (obstacle1) {
            obstacle1.draw();
            obstacle1.detectCollision(player);  
        });
        if (frameCount % 270 === 7) {
            this.obstacles2.push(new Obstacle(205, -520, 6, this.imgObst3));
        }
        this.obstacles2.forEach(function (obstacle2) {
            obstacle2.draw();
            obstacle2.detectCollision(player);  
        });
        if (frameCount % 200 === 7) {
            this.obstacles3.push(new Obstacle(265, -620, 6, this.imgObst4));
        }
        this.obstacles3.forEach(function (obstacle3) {
            obstacle3.draw();
            obstacle3.detectCollision(player);  
        });
    }
}
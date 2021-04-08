
class Game {

    setup() {
        this.obstacles = [];
        this.obstacles1 = [];
        this.obstacles2 = [];
        this.obstacles3 = [];
        this.level1 = true;
        this.obstacleSpeedLvl = {
            level1: [200, 250, 270, 200],
            level2: [120, 160, 100, 140]
        };
    }
    
    preload() {
        this.imgObst1 = loadImage('./resources/obstacles/obst1.png');
        this.imgObst2 = loadImage('./resources/obstacles/obst2.png');
        this.imgObst3 = loadImage('./resources/obstacles/obst3.png');
        this.imgObst4 = loadImage('./resources/obstacles/obst4.png');
    }

    draw(player) {
        if (this.level1 === true) { 
            if (frameCount % (true ? this.obstacleSpeedLvl.level1[0] : this.obstacleSpeedLvl.level2[0]) === 7) {
                this.obstacles.push(new Obstacle(80, -120, 8, this.imgObst1));
            }
            this.obstacles.forEach(function (obstacle) {
                obstacle.draw();
                obstacle.detectCollision(player);   
            });
            if (frameCount % (true ? this.obstacleSpeedLvl.level1[1] : this.obstacleSpeedLvl.level2[1]) === 7) {
                this.obstacles1.push(new Obstacle(140, -620, 8, this.imgObst2));
            }
            this.obstacles1.forEach(function (obstacle1) {
                obstacle1.draw();
                obstacle1.detectCollision(player);  
            });
            if (frameCount % (true ? this.obstacleSpeedLvl.level1[2] : this.obstacleSpeedLvl.level2[2]) === 7) {
                this.obstacles2.push(new Obstacle(205, -520, 8, this.imgObst3));
            }
            this.obstacles2.forEach(function (obstacle2) {
                obstacle2.draw();
                obstacle2.detectCollision(player);  
            });
            if (frameCount % (true ? this.obstacleSpeedLvl.level1[3] : this.obstacleSpeedLvl.level2[3]) === 7) {
                this.obstacles3.push(new Obstacle(265, -620, 8, this.imgObst4));
            }
            this.obstacles3.forEach(function (obstacle3) {
                obstacle3.draw();
                obstacle3.detectCollision(player);  
            });
        }
    }
}
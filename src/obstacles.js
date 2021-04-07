

class Obstacle {

    constructor(x, y, speed, image) {

        this.x = x
        this.y = y;
        this.speed = speed
        this.image = image
        this.width = 60
        this.height = 120
    }

    draw() {
        this.y++
        image(this.image, this.x, this.y, this.width, this.height)
        this.y += this.speed;
    }
        
    detectCollision(player) {
        let obstacleX = this.x + this.width;
        let obstacleY = this.y + this.height;
        let playerX = player.x + player.width;
        let playerY = player.y + player.height;
        if (dist(obstacleX, obstacleY, playerX, playerY) < 40) {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
        } else {
            return false;
        } 
    } 
}


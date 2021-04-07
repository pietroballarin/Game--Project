class Player {

    constructor() {
        this.x = 210;
        this.y = 480;
        this.width = 60
        this.height = 120
    }
    preload() {
        this.carImg = loadImage('/resources/player/car.png');
    }

    draw() {
        image(this.carImg, this.x, this.y, this.width, this.height);
        this.x = constrain(this.x, 70, 280);
    }


    keyPressed(keycode) {
        
        if (keycode == LEFT_ARROW)
        this.x -= 25;
        
        if (keycode == RIGHT_ARROW)
        this.x += 25;

        // if (keycode == UP_ARROW)
        // this.y -= 100

        // if (keycode == DOWN_ARROW)
        // this.y += 100
    }
}


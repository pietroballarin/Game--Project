class Player {

    constructor() {
        this.x = 210;
        this.y = 480;
    }

    draw() {
        image(this.carImg, this.x, this.y, 80, 160);
        this.x = constrain(this.x, 100, 420)
    }

    preload() {
        this.carImg = loadImage('/resources/player/car.png')
    }

    keyPressed(keycode) {
        
        if (keycode == LEFT_ARROW)
        this.x -= 30;
        
        if (keycode == RIGHT_ARROW)
        this.x += 30;

        if (keycode == UP_ARROW)
        this.y -= 100

        if (keycode == DOWN_ARROW)
        this.y += 100
    }


}


class Player {

    constructor() {
        this.x = 210;
        this.y = 480;
    }
    preload() {
        this.carImg = loadImage('/resources/player/car.png')
    }

    draw() {
        
        image(this.carImg, this.x, this.y, 60, 120);
        this.x = constrain(this.x, 100, 420)

        
    
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


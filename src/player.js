class Player {

    constructor() {
        this.x = 30;
        this.y = 210;
    }

    draw() {
        image(this.carImg, this.x, this.y, 160, 80);
    }

    preload() {
        this.carImg = loadImage('/resources/player/car.png')
    }

    keyPressed(keycode) {
        if (keycode == LEFT_ARROW)
        this.y -= 100;
        

        if (keycode == RIGHT_ARROW)
        this.y += 100;

        if (keycode == UP_ARROW)
        this.x += 100

        if (keycode == DOWN_ARROW)
        this.x -= 100

        console.log(this.y)
    }


}
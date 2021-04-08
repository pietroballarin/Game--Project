class Background {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 8;
    }

    draw() { 
        image(this.roadImg, this.x, this.y, width, height);
        image(this.roadImg, this.x, this.y-height, width, height);
        this.y += this.speed;
        if (this.y >= height){
            this.y = 0;
        } 
    }

    preload() {
        this.roadImg = loadImage('./resources/background/background-1.png');
    }  
}
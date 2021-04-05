class Background {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.x2 = width;
        this.speed = 20
    }

    draw() { 
        image(this.roadImg, this.x, this.y, width, height);
        image(this.roadImg, this.x2, this.y, width, height);

        this.x -= this.speed
        this.x2 -= this.speed

        if (this.x < -width+10){
            this.x = width;
          }
          if (this.x2 < -width+10){
            this.x2 = width;
          }
        
    }

    preload() {
        this.roadImg = loadImage('/resources/background/background-1.png');
    }

    
}



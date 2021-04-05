class Background {

    constructor() {
        this.x = 0;
        this.y = 0;
        let x1
    }

    draw() { 
        image(this.roadImg, this.x, this.y, width, height);
        
    }

    preload() {
        this.roadImg = loadImage('/resources/background/background-1.png');
    }

    
}



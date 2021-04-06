

class Obstacle {

    constructor() {
       // this.imgObst1;
        this.x = 120
        this.y = -120;

        this.speed = 7
        
    }

    draw() {
        this.y++
        image(game.imgObst1, this.x, this.y, 60, 120)
        this.y += this.speed
        
    }
   
}

class Obstacle1 {

    constructor() {
        // this.imgObst1;
         this.x = 320
         this.y = -120;
 
         this.speed = 7.2
         
     }
 
     draw() {
         this.y++
         image(game.imgObst2, this.x, this.y, 60, 120)
         this.y += this.speed
         
     }
}

class Obstacle2 {

    constructor() {
        // this.imgObst1;
         this.x = 220
         this.y = -120;
 
         this.speed = 9
         
     }
 
     draw() {
         this.y++
         image(game.imgObst3, this.x, this.y, 60, 120)
         this.y += this.speed
         
     }
}

class Obstacle3 {

    constructor() {
        // this.imgObst1;
         this.x = 420
         this.y = -120;
 
         this.speed = 11
         
     }
 
     draw() {
         this.y++
         image(game.imgObst4, this.x, this.y, 60, 120)
         this.y += this.speed
         
     }
}
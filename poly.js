class poly {
  constructor(x,y,radius) {
      
      this.body = Bodies.circle(x,y,radius);
     
      World.add(world,this.body);
     // this.image = loadImage("sprites/polygon.png");
     
    }
  
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
   fill("red")
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(this.image, 0,0,40,40);
    pop();
  }
};

  
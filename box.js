class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        friction:0.8,
        Density: 1,
        restitution: 1
       
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visiblity=255;    
  }

score(){
  if(this.visiblity<0&&this.visiblity <-10){

    score++;
}




  }
  display(){
    rectMode(CENTER);
    var pos =this.body.position;
    if(this.body.speed < 3){
      rect(pos.x,pos.y,this.width,this.height)
     }
     else{
      push();
       console.log("in")
       this.visiblity = this.visiblity - 5;
      World.remove(world,this.body)
       tint(255,this.visiblity);
    pop();
  }
}
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2, stand3;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18
var poly;
var score = 0;
var backgroundImg;
var dayImage;

function preload() {
  dayImage = loadImage("sprites/day.png")
  getBg();

  polyI=loadImage( "polygon.png")
   
}
function setup(){
 createCanvas(1000,400);
  engine = Engine.create();
  imageMode(CENTER)
  world = engine.world;
  stand1 = new Ground(280,500,150,20)
  stand2 = new Ground(710,300,150,20)
  stand3 = new Ground(600, height, 1200,20)
   //stand 1 
  box1 = new Box(250,480,20,20)
  box2 = new Box(270,480,20,20)
  box3 = new Box(290,480,20,20)
  box4 = new Box(310,480,20,20)
  box5 = new Box(280,480,20,20)
  box6 = new Box(260,460,20,20)
  box7 = new Box(280,460,20,20)
  box8 = new Box(300,460,20,20)
  box9 = new Box(280,440,20,20)
  //stand 2
  box10 = new Box(670,280,20,20)
  box11 = new Box(690,280,20,20)
  box12 = new Box(710,280,20,20)
  box13 = new Box(730,280,20,20)
  box14 = new Box(750,280,20,20)
  box15 = new Box(700,260,20,20)
  box16 = new Box(720,260,20,20)
  box17 = new Box(735,260,20,20)
  box18 = new Box(715,240,20,20)

  poly= Bodies.circle(100,100,40);
  World.add(world,poly)
  
  
  slingshot = new SlingShot(this.poly,{x:50,y:100})
}

function draw(){
  imageMode(CENTER)
  //if(backgroundImg)
  background("Gray"); 

  fill("black")
  textSize(30)
  text("score :" +score ,width-300,50);



  Engine.update(engine);
  stand1.display();
  stand2.display();
  stand3.display();
  box1.display();
  box2.display();
  fill("yellow")
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display()
  box8.display()
  box9.display();
  fill("orange")
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display()
  box17.display()
  box18.display();

  imageMode(CENTER)
image(polyI,poly.position.x,poly.position.y,30,30)
 
box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score()
  box8.score()
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score()
  box17.score()
  box18.score();  


  slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.poly, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode=== 32){
    slingshot.attach(this.poly)

    }
    
}

async function getBg(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON= await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour >= 6  && hour <=  17){
  bg = dayImage
    
  }
  //else{
   // bg = "sprites/bg2.jpg"
    
  //}

  backgroundImg= bg

  


}


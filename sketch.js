const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;
var a;
var circles=[];
var stand1, stand2, stand3;
var blockGreen1, blockGreen2, blockGreen3, blockGreen4, blockGreen5;
var blockPurple1, blockPurple2, blockPurple3;
var blockPink1;
var polygon, polygonIMG;
var score = 0;

function preload(){
    polygonIMG = loadImage("polygon.png");
}

function setup() {
  createCanvas(1100,550);

  engine = Engine.create();

  world = engine.world
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  //circles.push(width/2)

  //create sprites here
  //level 1
  stand1 = new Ground(600, 400, 200, 15);
  blockGreen1 = new BlockGreen(530, 370, 30, 40);
  blockGreen2 = new BlockGreen(565, 370, 30, 40);
  blockGreen3 = new BlockGreen(600, 370, 30, 40);
  blockGreen4 = new BlockGreen(635, 370, 30, 40);
  blockGreen5 = new BlockGreen(670, 370, 30, 40);
  blockPurple1 = new BlockPurple(565, 325, 30, 40);
  blockPurple2 = new BlockPurple(600, 325, 30, 40);
  blockPurple3 = new BlockPurple(635, 325, 30, 40);
  blockPink1 = new BlockPink(600, 280, 30, 40);
  
  //level2 - polygon at greater distance from stand



  //polygon to knock down blocks
  polygon = Bodies.circle(150, 300, 20); 
  imageMode(CENTER);
  image(polygonIMG, polygon.position.x, polygon.position.y, 40, 40);
  World.add(world, polygon);

  //add slingShot
  slingShot = new SlingShot(polygon.body,{x:150,y:300});

  score = 0;
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(155);  
  textSize(24);
  fill("0")
  text("Score:" + score, 850, 100);
  text("Level 1", 50, 100);

  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 //level1
 stand1.display();
 blockGreen1.display();
 blockGreen2.display();
 blockGreen3.display();
 blockGreen4.display();
 blockGreen5.display();
 blockPurple1.display();
 blockPurple2.display();
 blockPurple3.display();
 blockPink1.display();
 slingShot.display;



 ellipse(polygon.position.x,polygon.position.y,20);
 imageMode(CENTER);
 image(polygonIMG, polygon.position.x, polygon.position.y, 40, 40);

 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(polygon.body);
  }
}
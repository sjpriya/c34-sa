const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ground;
var ball, rope;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(900, 100, 70, 70);
  // create box objects 
  
  ball = new Ball(200, 200, 80, 80);
  //create rope object 

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  // display boxes
  

  ball.display();
  // display rope


}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}



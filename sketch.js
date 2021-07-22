
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var box1, box2;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 670);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(width/2, 670, 1600, 20);

	  paper=new Paper(200,450,40);

    box1=new Dustbin(width/2-10, 610, 20, 100);
    box2=new Dustbin(width/2+100, 650, 200, 20);
    box3=new Dustbin(width/2+200, 610, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:9,y:-9});
  }
}



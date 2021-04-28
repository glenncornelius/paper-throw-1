var engine, world;
var ppr,b1,b2,b3,grund;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ppr = new PaperClass(200,200,15);
    b1 = new Bin(640,655,120,10);
	b2 = new Bin(585,590,8,120);
    b3 = new Bin(695,590,8,120);
	grund = new Ground(400,670,windowWidth,20);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 
  ppr.display();
  b1.display();
  b2.display();
  b3.display();
  grund.display();
  console.log(mouseX);
  drawSprites();
}




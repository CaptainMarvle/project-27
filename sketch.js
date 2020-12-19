
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bob1,bob2,bob3,bob4,bob5;
var bobDiameter;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(100,6000,100,100)
	bob2 = new Bob(200,600,100,100)
	bob3 = new Bob(300,600,100,100)
	bob4 = new Bob(400,600,100,100)
	bob5 = new Bob(500,600,100,100)
    roof = new Roof(380,100,550,50)
	rope = new Rope(bob1.body, roof.body, -bobDiameter*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGray");

rope.display();  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();


  drawSprites();
 
}




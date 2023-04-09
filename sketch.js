
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={

		isStatic:false,
		restitution:0.3
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=Bodies.circle(100,200,30,ball_options)
World.add(ball,world)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




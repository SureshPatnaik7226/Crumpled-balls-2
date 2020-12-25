
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var ground,paper;
//var block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Dustbin(950, 550, 200, 10);

	ground = new Ground(600, 570, 1200, 10);

	ball = new Paper(100, 520, 35);

	//var ground_options ={
		//isStatic: true
	 // }
	//Create the Bodies Here.
	//ground = Bodies.rectangle(600,603,1200,20,ground_options);
	//World.add(world,ground);
	//ground = createSprite(600,659,1200,130);
	//paper = new Paper(100,250);
	//block1 = new Dustbin(940,532,15,130);
	//block3 = new Dustbin(1155,532,15,130);
	 // block2 = new Dustbin(1048,590,230,15);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //rect(ground.position.x,ground.position.y,400,20);
  background("yellow");
  
  //drawSprites();
  drawSprites();
  ball.display();
  ground.display();
  bin1.display();

  //paper.display();
  //block1.display();
 // block2.display();
 // block3.display();
}
function keyPressed() {
	if(keyCode===38){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-250});
	}
} 



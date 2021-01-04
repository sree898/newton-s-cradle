
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

	BobObject1 =Createsprite (200,100,150,50);
	BobObject2 = Createsprite (250,150,200,100);
	BobObject3 = Createsprite (300,150,250,150);
	BobObject4 =Createsprite(350,200,300,200);
	BobObject5=Createsprite (400,250,350,250);

rope1=new rope (BobObject1.body,roofObject.body,-bobDiameter*2, 0);
rope2=new rope (BobObject2.body,roofObject.body,-bobDiameter*2, 0);
rope3=new rope (BobObject3.body,roofObject.body,-bobDiameter*2, 0);
rope4=new rope (BobObject4.body,roofObject.body,-bobDiameter*2, 0);
rope5=new rope (BobObject5.body,roofObject.body,-bobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




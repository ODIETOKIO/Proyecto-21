
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pelota;
var pisoo;
var world;
function preload(){
	
}

function setup() {
	createCanvas(800, 300);

 pisoo=new Ground(400,280,800,50);
	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
 var pelota_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
 }
  pelota = Bodies.circle(200,100,20,pelota_options);
  World.add(world,pelota);
  ellipseMode(RADIUS);
 
 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(pelota.position.x,pelota.position.y,20,20)
  drawSprites();
  pisoo.display();
}




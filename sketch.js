const Bodies = Matter. Bodies;
const Engine = Matter. Engine;
const World = Matter.World;
var world, engine;
function preload(){
  circleImg = loadImage("images/circle.png");
  bgImg = loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  invisquare = createSprite(400,200,200,200);
arrow1 = createSprite(600, 200, 2,10)
console.LOH
 circle = createSprite(400, 200, 50, 50);
 circle.addImage(circleImg);
 //circle.debug = true;
 circle.setCollider("rectangle", 0,0,200,200);
 circle.rotation = -20;
  circle.rotateToDirection=true;
 // circle. velocityX = 5;
//  for(var i= 600; i<=invisquare.width; i++){
//    arrow = createSprite(i, 20,2,10)
//    console.log(i)
//  }
  Engine.run(engine);
}

function draw() {
  background(bgImg);  
  circle.rotation =  circle.rotation +2;
  drawSprites();
}
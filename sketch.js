var car,wall;
var speed,weight;




function setup() {

  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(400,200,80,30);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor= color(80,80,80);
  car.velocityx = speed;

}

function draw() {
  background(0);  
  if(wall.x-car.x <(car.width +wall.width)/2);
  {
  car.velocityx = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    car.shapecolor = color(255,230,0);

  }
  if(deformation<180 && deformation >100)
  {
    car.shapecolor = color(230,230,0);
  }
  if (deformation<100)
  {
    car.shapecolor = color(0,255,0);
  }
  }
  drawSprites();
}
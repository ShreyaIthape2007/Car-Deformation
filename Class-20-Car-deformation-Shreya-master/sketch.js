var car, wall,weight,speed
function setup() {
  createCanvas(1600,400);

  car=createSprite(400, 200, 50, 50);
  wall=createSprite(1500,200,50,1600)
  weight=random(400,1500);
  speed=random(30,95);

}

function draw() {
  background(255,255,255); 
  background('black')
  
  car.shapeColor='white';
  car.weight=weight;
  car.velocityX=speed;
  
  wall.shapeColor=(80,80,80);
  
  car.setCollider("rectangle",60,0,car.width,car.height)
  car.debug=true;


  if(wall.x-car.x<= (0.5 * car.width + 0.5 * wall.width)){
    car.shapeColor='blue';
    car.velocityX=0;

    var deformation= (0.5 * car.weight * speed * speed )/22500
    if (deformation<100){
      car.shapeColor='green'
    }
    else if (deformation >100 && deformation < 180){
      car.shapeColor='yellow'
    }
    else if (deformation > 180){
      car.shapeColor='red'
    }

  }



  




  drawSprites();
}
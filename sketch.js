function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(300,230)
  astronaut . addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
}
var brush,gym,eat,bathing,move,astronaut,iss
function draw() {
  background(255,255,255);  
  drawSprites();
  if (keyDown("UP_ARROW")){
    astronaut . addAnimation("brushing", brush);
    astronaut . changeAnimation("brushing");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("Down_Arrow")){
    astronaut . addAnimation("Gymming",gym);
    astronaut . changeAnimation("Gymming");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("Left_ARROW")){
    astronaut . addAnimation("Eating",eat );
    astronaut . changeAnimation("Eating");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("Right_Arrow")){
    astronaut . addAnimation("Bathing",bathing );
    astronaut . changeAnimation("Bathing");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("m key")){
    astronaut . addAnimation("moving",move);
    astronaut . changeAnimation("moving");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
}
function preload(){ bg= loadImage("iss.png");
 sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
   gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png"); 
   eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
    bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
 move = loadAnimation("move1.png","move1.png","move2.png","move2.png"); }
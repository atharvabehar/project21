var bullet , wall;
var speed , weight
var thickness;

function setup() { 

  createCanvas(1600,400);
  speed = random(223 ,321)
  weight = random(30,52)
  thickness = random(22,83);
 bullet=createSprite(50,200,15,5);
 bullet.shapeColor = "white";
 wall=createSprite(1200,200,thickness,height/2);
 bullet.velocityX = speed
wall.shapeColor =color(80,80,80);
 
}

function draw() {
  background(0);  
  if(istouching(wall,bullet)){
    damge = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;
   console.log(damge);
   if (damge >= 10){
 wall.shapeColor = color(255,0,0);
   }
   if (damge < 10  ){
wall.shapeColor = color(0,255,0);
   }
  }
  drawSprites();
}
function istouching(o1,o2){
  if (o1.x-o2.x < o1.width/2 + o2.width/2
     ){
      return  true;
    }else {
      return false
    }
  }
var bg, sleep, brush, gym, eat, bath, move;
var astronaut
function preload(){
bg=loadImage("Images/iss.png")
sleep=loadAnimation("Images/sleep.png")
brush=loadAnimation("Images/brush.png")
gym=loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
eat=loadAnimation("Images/eat1.png","Images/eat1.png","Images/eat2.png","Images/eat2.png")
bath=loadAnimation("Images/bath1.png","Images/bath1.png","Images/bath2.png","Images/bath2.png")
move=loadAnimation("Images/move.png","Images/move.png","Images/move1.png","Images/move1.png")

}
function setup() {
  createCanvas(800,400);
 astronaut=createSprite(300,230)
 astronaut.addAnimation("sleeping", sleep)
 astronaut.scale=0.1

}

function draw() {
  background(bg);  
  drawSprites();
textSize(20)
fill("white")
text("Instructions:",20,35)
textSize(15)
text("UP ARROW = BRUSHING",20,55)
text("DOWN ARROW = GYMMING",20,70)
text("LEFT ARROW = EATING",20,85)
text("RIGHT ARROW = BATHING",20,100)
text("m KEY = MOVING",20,115)

edges=createEdgeSprites();
astronaut.bounceOff(edges);
if(keyDown("m")){
astronaut.addAnimation("moving", move)
astronaut.changeAnimation("moving")
astronaut.velocityY=1
astronaut.velocityX=1
}
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush)
  astronaut.changeAnimation("brushing")
  astronaut.y=350
  astronaut.velocityY=0
  astronaut.velocityX=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=350
    astronaut.velocityY=0
    astronaut.velocityX=0
    }
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating", eat)
      astronaut.changeAnimation("eating")
      astronaut.y=350
      astronaut.x=150
      astronaut.velocityY=0.5
      astronaut.velocityX=0.5
      }
      if(keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("bathing", bath)
        astronaut.changeAnimation("bathing")
        astronaut.x=300
        astronaut.velocityY=0
        astronaut.velocityX=0
        }
}

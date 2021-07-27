var square,squareImg;
rectangle,rectangleImg,rectangleGrp;
var shapeBG;
var Circle,CircleImg,CircleGrp;
var gameState = "play"
var restartBtn,restartBtnImg;
var score = 0;


function preload(){
   shapeBG = loadImage("ShapesBG.png")
   squareImg = loadImage()
   CircleImg = loadImage("Circle.jpg")
   restartBtnImg = loadImage("restart.jpg")
   rectangleImg = loadImage("Rectangle.jpg")
}

function setup(){
   createCanvas(600,600)
   square = createSprite(300,300,20,20)
   restartBtn = createSprite(300,300,50,50)
}

function draw(){
    background(shapeBG)
    restartBtn.addImage(restartBtnImg)
    if(gameState === "play"){
      if(keyDown("right_arrow")){
        square.x = square.x-2
      }
      if(keyDown("left_arrow")){
        square.x = square.x+2
      }
      if(keyPressed(restartBtn)){
         gameState = "end"
      }
      if(square.isTouching(rectangleGrp)){
        score = score+1
      }
    }
    else if(gameState === "end"){
      Circle.VelocityY = 0
      score = 0
    }

    drawSprites();
}

function spawnCircles(){
  if(frameCount % 240 === 0){
    Circle = createSprite(200,-50)

    Math.random(round(120,400))
    Circle.addImage(CircleImg)

    Circle.VelocityY = 1;

    CircleGrp.add(Circle)
  }
}

function spawnRectangle(){
  if(frameCount % 240 === 0){
    rectangle = createSprite(200,-20)

    Math.random(round(120,400))
    rectangle.addImage(rectangleImg)

    rectangle.VelocityY = 0;

    rectangleGrp.add(rectangle)
  }
}
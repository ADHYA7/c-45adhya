var bgimg,bg
var b1,b2,b3
var b4,b5,b6
var mate;

function preload(){
//bgimg = loadImage("bg.jpg")

}

function setup(){
 canvas = createCanvas (1200,700)
//bg = createSprite(600,350,10,10)
//bg.addImage(bgimg)
//bg.scale=3;
b1 = createSprite(21,69,100,20)
b2 = createSprite(85,69,10,100)
b3 = createSprite(130,112,100,20)
mate = createSprite(50,50,15,15)
}

function draw(){
background(0)
text(mouseX+ "," +mouseY,mouseX,mouseY)
if(keyIsDown(UP_ARROW)){
    mate.y=mate.y-2
}
if(keyIsDown(DOWN_ARROW)){
    mate.y=mate.y+2
}
if(keyIsDown(LEFT_ARROW)){
    mate.x=mate.x-2
}
if(keyIsDown(RIGHT_ARROW)){
    mate.x=mate.x+2
}
drawSprites();
}
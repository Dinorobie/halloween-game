var character, characterimg;
var bg,backgroundimg,invisibleGround;
var evil, evilimg

function preload(){
    characterimg= loadImage("./assets/char.gif"); 
    backgroundimg=loadImage("./assets/forest.gif");
    evilimg=loadImage("./assets/zombie.gif");
}

function setup(){
    createCanvas(600, 450);
    
//Add background object
    bg = createSprite (400,180,600,600);
    bg.addImage("bg",backgroundimg);
    //bg.velocityX=1;
    bg.velocityX = -(2 + 1)

// Add character
    character = createSprite(50,400,20,50);
    character.addImage("character",characterimg);
    character.scale=0.5;

//Add invisible ground
    invisibleGround = createSprite(600,460,600,590);
    invisibleGround.visible = false;

    
}

function draw(){
//moving background
    if (bg.x > 400){
        bg.x = 300;
      }
//move character
    if(keyDown("space") && character.y>=100){
        character.velocityY=-12;
    }

// add gravity to character+ground
     character.velocityY = character.velocityY + 0.8
     character.collide(invisibleGround);
    
      drawSprites();
 }
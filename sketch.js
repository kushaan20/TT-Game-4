const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var table;
var player1image, player1;
var sky;
var player2, computerimage;
var ball;
var form, player, game;
var score = 0;
var score2 = 0;
var sound1;
var computerHit;
textSize(500);
//var textFont("Arial");
var gameState = "serve";

function preload(){
  player1image = loadImage("racket.png");
  tableImage = loadImage("table2.png");
  skyimage = loadImage("background.jpg");
  computerimage = loadImage("tt2copy.png");
  computerHit = loadImage("tt2.png");
  ballimage = loadImage("ball.png");
  sound1 = loadSound("sound.mp3");
  //player2image2 = loadImage("tt.png")
}

function setup() {
  createCanvas(800,600);
  /*game = new Game();
  game.getState();
  game.start();*/
  if(keyDown === 32){
    ball.velocityY = -5; 
    gameState = "play";
    }

 /* sky = createSprite(400,250,800,50)
  sky.addImage("skyImage", skyimage);
  sky.scale = 2;*/
  
  player2 = createSprite(400,160);
  player2.addImage("player2Image", computerimage);
  player2.scale = 0.8;

  table = createSprite(400,500);
  table.addImage("table1Image", tableImage);
  table.scale = 1.2;

  ball = createSprite(400,400);
  ball.addImage("ballImage", ballimage);
  ball.scale = 0.05;
  //ball.velocityY = 1;

  player1 = createSprite(300,600);
  player1.addImage("playerImage", player1image);
  player1.scale = 0.4;
  ball.velocityY = 3;

}

function draw() {
  background(skyimage); 
  console.log(ball.y);

  if(gameState === "serve"){
    text("Press Space Key to play!",350,100);
  }

  player1.position.x = mouseX;
  player1.position.y = mouseY; 

  //ball.x = player1.x;

  player2.x = ball.x - 20;

  if (ball.velocityY = 0){
   player1.y = ball.y;
  }


 if(player1.position.x === 400 && player1.position.y === 300){
   ball.velocityY = 1;
   }

   if (ball.y <= 100){
    // isTouching2(ball,player2);
     ball.velocityY = ball.velocityY*(-1);
   }

   if(ball.y < 0){
   reset();
   gameState = "serve";
   score = score + 1;
   }

   if(ball.y > 400){
    gameState = "serve";
   // gameState = "serve";
    score2 = score2 + 1;
    }

   if (score === 5 || score2 === 5){
    gameState = "over";
    text("Game Over! Press 'R' to restart!" , 350, 100);
   }

   if(gameState === "over"){
    ball.velocityY = 0;
    ball.velocityX = 0;
   }

  isTouching(ball,player1);
  isTouching2(ball,player2);
  
  if(ball.x > 200 && ball.x < 400 && ball.y < 170){
     ball.velocityY = 200;
     ball.velocityX = 500;
   }

    
  if(ball.x > 400 && ball.x < 600 && ball.y < 170){
    ball.velocityY = 200;
    ball.velocityX = -500;
    player2.addImage("computer2image", computerHit);
    sound1.play(); 
  }

  //sound1.play(); 

  text ("Player's Score =" + score, 100, 20);
  text ("Computer's Score =" + score2, 630, 20);

drawSprites();
}

function isTouching(object1,object2){
  if(player1.x  === ball.x && ball.y > 400 || player1.x - 5 === ball.x - 5 || player1.x - 4 === ball.x - 4 || player1.x - 3 === ball.x - 3|| player1.x - 2 === ball.x - 2|| player1.x - 1 === ball.x - 1|| player1.x + 1 === ball.x + 1|| player1.x + 2 === ball.x + 2|| player1.x + 3 === ball.x + 3|| player1.x + 4 === ball.x + 4|| player1.x + 5 === ball.x + 5/*player1.y === ball.y*/ /*|| player1.y - 5 === ball.y || player1.y - 4 === ball.y || player1.y - 3 === ball.y || player1.y - 2 === ball.y || player1.y - 1 === ball.y || player1.y + 1 === ball.y || player1.y + 2 === ball.y || player1.y + 3 === ball.y || player1.y +4 === ball.y || player1.y +5 === ball.y*/ ){
     ball.velocityY = -3;
    // sound1.play(); 
  }
}

function isTouching2(object1,object4){
  if(player2.x === ball.x){
    ball.velocityY = 5;
  }
}

function reset(){
  ball.x = 400;
  ball.y = 400;
  ball.velocityY = 0;
  ball.velocityX = 0;
}

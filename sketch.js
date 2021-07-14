var canvas, backgroundImage;
var side_b,side_t,side_r, side_l;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var xVel=0;
var yVel=0;
var form, player, game,player1Img;
var track;
var characters,character1,character2,character3,character4;
var cars;
//var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
 // player1Img=loadAnimation("images/n1.jpg","images/n2.png","images/n3.png","images/n4.png","images/n5.png","images/n6.png","images/n7.png","images/n8.png","images/n9.png","images/n10.png");
// player1Img=loadAnimation("images/blue1.png","images/blue2.png","images/blue3.jpg","images/blue4.jpg")
player1Img=loadAnimation("images/ninja.png")
 track=loadImage("images/bg.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){



  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  if(frameCount===10){

    side_r=createSprite(displayWidth-10,displayHeight/2, 5, displayHeight-10);
    side_l=createSprite(10,displayHeight/2, 5,displayHeight-10);
    side_t=createSprite(displayWidth/2,10,displayWidth-10, 5)
    side_b=createSprite(displayWidth/2,displayHeight-10, displayWidth-10, 5);

  }
  if(frameCount===200){
  /*side_b.visible=false;
    side_t.visible=false;
    side_r.visible=false;
    side_l.visible=false;*/





    side_r=createSprite(displayWidth-60,displayHeight/2, 5, displayHeight-110);
    //side_r=createSprite(550,300, 5, 500);
    side_l=createSprite(60,displayHeight/2, 5,displayHeight-110);
    //side_l=createSprite(50,300, 5, 500);
    side_t=createSprite(displayWidth/2,60,displayWidth-110, 5)
    //side_t=createSprite(300,50, 500, 5);
    side_b=createSprite(displayWidth/2,displayHeight-60, displayWidth-110, 5);
    //side_b=createSprite(300,550, 500, 5);

  }else if(frameCount===400)
  {

   /* side_b.visible=false;
    side_t.visible=false;
    side_r.visible=false;
    side_l.visible=false;*/

    //side_r=createSprite(500,300, 5, 400);
    side_r=createSprite(displayWidth-110,displayHeight/2, 5, displayHeight-210);
    side_l=createSprite(110,displayHeight/2, 5,displayHeight-210);
    //side_l=createSprite(100,300, 5, 400);
    side_t=createSprite(displayWidth/2,110,displayWidth-210, 5)
    //side_t=createSprite(300,100, 400, 5);
    side_b=createSprite(displayWidth/2,displayHeight-110, displayWidth-210, 5);
    //side_b=createSprite(300,500, 400, 5); 
  }
  else if(frameCount===600)
  {

  /*  side_b.visible=false;
    side_t.visible=false;
    side_r.visible=false;
    side_l.visible=false;*/

    side_r=createSprite(displayWidth-160,displayHeight/2, 5, displayHeight-310);
    side_l=createSprite(160,displayHeight/2, 5,displayHeight-310);
    //side_l=createSprite(100,300, 5, 400);
    side_t=createSprite(displayWidth/2,160,displayWidth-310, 5)
    //side_t=createSprite(300,100, 400, 5);
    side_b=createSprite(displayWidth/2,displayHeight-160, displayWidth-310, 5);
    /*side_r=createSprite(450,300, 5, 300);

    side_l=createSprite(150,300, 5, 300);

    side_t=createSprite(300,150, 300, 5);
  
    side_b=createSprite(300,450, 300, 5);*/
  }





}

/*function readPositionTop(data){
position=data.val();
side_t.x=position.x;
side_t.y=position.y
}

function writePositionTop(x,y){
database.ref("side_TOP/position").set({
'x':position.x + x,
'y':position.y + y
})



}*/
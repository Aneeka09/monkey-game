//Global Variables
var PLAY;
var END;
var gameState=PLAY;





var monkey,monkey_running;
var ground,invisibleGround,groundImg;
var fruitGroup,fruitImg;
var stoneGroup,stoneImg;
var score = 0
var gameOver,restart;
var backGround,backImg;


function preload(){
 backImg=loadImage("jungle.png");
  
  monkey_running=
    loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"
)
  bananaImg=loadImage("Banana.png");
  stoneImg=loadImage("stone.png");
  ground=loadImage("ground.jpg");
  restart=loadImage("restart.png");
  gameOver=loadImage("gameOver.png");
}

function setup() {
  createCanvas(600,300);
  
  monkey=createSprite(50,340,10,10);
  monkey.addAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",trex_running
)
  ground=createSprite(200,370,1000,10);
  ground.addImage("ground.jpg");
  ground.x=ground.width/2;
  
  gameOver=createSprite(200,200,10,10);
  gameOver.addImage("gameOver.png");
  
  restart=createSprite(100,200,10,10);
  restart.addImage("restart.png");
  
   gameOver.visible = false;
  restart.visible = false;
  
   invisibleGround = createSprite(200,360,400,10);
  invisibleGround.visible = false;
  invisibleGround.x=ground.width/2;
  
  fruitGroup=new Group();
  stoneGroup=new Group();
  
  score=0;
}


function draw(){
 background(255);
  text("Score: "+ score, 500,50);
  
  if( gameState===PLAY){
    
  }
  
}
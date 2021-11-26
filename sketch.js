var db;
var form,game,player;
var gameState = 0;
var playerCount = 0;
var player1,player2;
var players;
var allPlayers;
var target1;
var target2
var targetImage;
var groundImg;
var arrow1,arrow2;
var arrowImg;
var arrow1Group,arrow2Group;
var target1Group,target2Group;
var score = 0
var hittingArrow;
var backgroundMusic

function preload()
{
   player1Image=loadImage("images/player1.png");
   player2Image=loadImage("images/player2.png");
   targetImage = loadImage("images/target.png");
   groundImg = loadImage("images/ground.jpg");
   arrowImg = loadImage("images/Arrow2.png");
   hittingArrow = loadSound("sound/arrowSound.wav");
   backgroundMusic = loadSound("sound/background.wav");

}

function setup()
{
   createCanvas(1000,600);

   db = firebase.database();
   arrow1Group = new Group();
   arrow2Group = new Group();
   target1Group = new Group();
   target2Group = new Group();

   game = new Game();
   game.getState();
   game.start();
}

function draw()
{
   if(playerCount===2)
   {
      game.updateState(1);
   }
   if(gameState===1)
   {
      clear();
      game.play();
   }
}




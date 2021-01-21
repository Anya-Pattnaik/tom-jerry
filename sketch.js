var gardern, gardernImg;
var jerry, jerryGroup, jerryOne, jerryTwo, jerryThree, jerryFour;
var tom, tomGroup, tomOne, tomTwo, tomThree, tomFour,


function preload() {
    gardenImage=loadImage("garden.png");
  jerryOne =loadImage("jerryOne.png");
  jerryTwo =loadImage("jerryTwo.png");
  jerryThree =loadImage("jerryThree.png");
  jerryFour =loadImage("jerryFour.png");
  tomOne =loadImage("tomOne.png");
  tomTwo = loadImage("tomTwo.png");
  tomThree = loadImage("tomThree.png");
  tomFour = loadImage("tomFour.png");

}

function setup(){
    createCanvas(1000,800);
      jerry = createSprite(110, 330, 10, 10);
      jerry.addImage("jerryOne, jerryTwo, jerryThree, jerryFour, ", jerryImage);
      
      tom = createSprite(320, 340, 10, 10);
      tom.addImage("tomOne, tomTwo, tomThree, tomFour, ", tomImage);
      jerryGroup = createGroup();
      tomGroup = createGroup();

}

function draw() {

    background(255);
    garden.addImage("gardenImg", garden);
    garden.scale =1.2

    jerry.addAnimation("tomOne",tomOne);
    jerry.addAnimation("tomFour", tomFour);

    tom.addAnimation("jerryFour",jerryFour);
    tom.addAnimation("jerryOne", jerryOne);

    if (tom.isTouching(jerry)) {
    tom.addAnimation("catLastImage", tomThree);
    tom.changeAnimation("catLastImage");
    jerry.addAnimation("jerryLastImage", jerryThree);
    jerry.addAnimation("jerryLastImage");

    }

    drawSprites();

}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("catRunning",tomTwo);
    tom.changeAnimation("catRunning");
  }

  if(keyCode === RIGHT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("catRunning",tomTwo);
    tom.changeAnimation("catRunning");
  }

  if(tom.x - jerry.x < (tom.width-jerry.width)/2){
    tom.addAnimation("catLastImage", tomThree);
    tom.changeAnimation("catLastImage");
    jerry.addAnimation("jerryLastImage", jerryThree);
    jerry.addAnimation("jerryLastImage");

  }


}

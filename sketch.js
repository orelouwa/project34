var dogImg,happyDog,database,foodS,foodStock,dog;

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,15,10,50);
  dog.addImage("image",dogImg);

foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if (keyWentDown(UP_ARROW)) {
  writeStock(foodS)
  dog.addImage(happyDog);
}

  drawSprites();
textSize(20)
fill("purple")
stroke("grey");
("FoodStock" +foodStock,20,30);
}

function readStock() {
  foodS=data.val();
}

function writeStock(x) {
 if (x<=0) {
   x=0;
 } else {
   x=x-1;
 }
 
  database.ref('/').update({
    Food:x
  })
}

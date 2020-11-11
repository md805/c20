var fo,mo;

function setup() {

  createCanvas(1200,800);
  fo= createSprite(600, 400, 50, 80);
  mo= createSprite(400, 200, 80, 30);
  fo.shapeColor="green";
  mo.shapeColor="green";
  mo.debug=true;
  fo.debug=true;
}

function draw() {
  background(255,255,255);  
mo.x=World.mouseX;
mo.y=World.mouseY;
if(mo.x-fo.x<mo.width/2+fo.width/2 &&
  fo.x-mo.x<mo.width/2+fo.width/2 &&
  mo.y-fo.y<mo.height/2+fo.height/2 &&
  fo.y-mo.y<mo.height/2+fo.height/2){
  mo.shapeColor="red";
  fo.shapeColor="red";

}
else{
  fo.shapeColor="green";
  mo.shapeColor="green";

}
  drawSprites();
}
var f,m;

function setup() {
  createCanvas(800,400);
  f=createSprite(200, 200, 80, 50);
  m=createSprite(400,200,30,50);
  f.shapeColor="green";
  m.shapeColor="green";
}

function draw() {
  background(0); 
  
  m.x=World.mouseX;
  m.y=World.mouseY;

  if(m.x-f.x<=m.width/2+f.width/2 && f.x-m.x<=m.width/2+f.width/2 && m.y-f.y<=m.height/2+f.height/2 && f.y-m.y<=m.height/2+f.height/2  ){
    f.shapeColor="red";
    m.shapeColor="red"; 
  }
  else {
    f.shapeColor="green";
    m.shapeColor="green";
  }  
  drawSprites();
}
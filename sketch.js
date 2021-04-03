const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11; 
var block12, block13, block14, block15, block16, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var base, base2;
var polygon;
var slingshot;
var score = 0;

function preload()
{
   
}

function setup()
{
var canvas = createCanvas (1200,500);

engine = Engine.create();
world = engine.world;

ground = new Ground (0,485,2400,30);
base = new Ground (690,300,250,30);
base2 = new Ground (960,150,190,30);

block1 = new Box (600,275,30,40);
block2 = new Box (630,275,30,40);
block3 = new Box (660,275,30,40);
block4 = new Box (690,275,30,40);
block5 = new Box (720,275,30,40);
block6 = new Box (750,275,30,40);
block7 = new Box (780,275,30,40);

block8 = new Box (630,235,30,40);
block9 = new Box (660,235,30,40);
block10 = new Box (690,235,30,40);
block11 = new Box (720,235,30,40);
block12 = new Box (750,235,30,40);

block13 = new Box (660,195,30,40);
block14 = new Box (690,195,30,40);
block15 = new Box (720,195,30,40);

block16 = new Box (690,155,30,40);

block17 = new Box (900,100,30,40);
block18 = new Box (930,100,30,40);
block19 = new Box (960,100,30,40);
block20 = new Box (990,100,30,40);
block21 = new Box (1020,100,30,40);

block22 = new Box (930,60,30,40);
block23 = new Box (960,60,30,40);
block24 = new Box (990,60,30,40);

block25 = new Box (960,20,30,40);

polygon = new Polygon (200,250, 75,75);

slingshot = new SlingShot (polygon.body, {x: 200, y:225});

Engine.run(engine);
}

function draw ()
{
    background (0);
    Engine.update(engine);

    ground.display();
    base.display();
    base2.display();

    fill(149, 125, 173);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill(210,145,188);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(224, 187, 228);
    block13.display();
    block14.display();
    block15.display();
    
    fill(254, 200, 216);
    block16.display();

    fill(191, 209, 223);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    
    fill(146, 177, 182);
    block22.display();
    block23.display();
    block24.display();
    
    fill(101, 140, 141);
    block25.display();

    polygon.display();
    slingshot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    
    drawSprites();

    noStroke();
    fill(222, 165, 164);
    textSize(20);
    textFont("Courier");
    text("Score: " +score, 157, 175);
   
}

function mouseDragged()
{
    Matter.Body.setPosition (polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingshot.attach(polygon.body);
    }
}
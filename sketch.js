const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box3;
var box4;
var box2;
var ground;
var pig2;
var roof2;
var roof3;
var roof4;
var box5;
var pig1;
var roof;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
pig1=new pig(810,350);
    box1 = new Box(700,320,70,70);
    box2= new Box(920,320,70,70)
    ground=new Ground(600,390,1200,20);
    roof=new log(810,260,300,PI/2)
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig2=new pig(810,220);
    roof2=new log(810,180 ,300,PI/2);
    box5=new Box(810,160,70,70);
    roof3=new log(760,120,150,PI/7);
    roof4=new log(870,120,150,-PI/7);
    bird1=new bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box3.display()
    box4.display()
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    roof.display();
    roof2.display();
   box5.display();
   roof3.display();
   roof4.display();
   bird1.display();

   
}
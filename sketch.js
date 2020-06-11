const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState="attached"

function preload() {
    backgroundImg = loadImage("sprites/bowling.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);    
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    box3 = new Box(840,320,70,70);
    box4 = new Box(910,320,70,70);
    box5 = new Box(980,320,70,70);

    log1=new Log(840,240,350,PI/2);
    

    box6 = new Box(735,200,70,70);
    box7 = new Box(805,200,70,70);
    box8 = new Box(875,200,70,70);
    box9 = new Box(945,200,70,70);

    log2= new Log(840,170,350,PI/2);

    box10=new Box(750,120,70,70);
    box11= new Box(840,120,70,70);
    box12=new Box(910,120,70,70);

    ball = new Ball(100,100);

    chain = new Chain(ball.body,{x:200,y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();

    box1.appear();
    box2.appear();
    box3.appear();
    box4.appear();
    box5.appear();
    box6.appear();
    box7.appear(); 
    box8.appear();
    box9.appear();
    box10.appear();
    box11.appear();
    box12.appear();


    ball.display();
    chain.display();    

    log1.display();
    log2.display();
}

function mouseDragged(){
    if(gameState!=="launched"){
        Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
    
}

function mouseReleased(){
    chain.fly();
    gameState="launched"
}

function keyPressed(){
    if (keyCode===32){
       // chain.attach(ball.body);        
    }

}
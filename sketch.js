const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,750,800,20);
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
    box1=new Box(200,100,50,50);
    box2 = new Box(245,50,50,50);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    box1.display();
    box2.display();

    ground.display();
}
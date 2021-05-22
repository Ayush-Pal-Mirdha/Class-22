const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   ground = Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,ground);

    box1 = Bodies.rectangle(100,100,50,50);
    World.add(world,box1);
    
    var option = {
        restitution:1
    }

    circle = Bodies.circle(300,100,30,option);
    World.add(world,circle);    

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box1.position.x,box1.position.y,50,50);
    ellipseMode(RADIUS)
    ellipse(circle.position.x,circle.position.y,30);
}

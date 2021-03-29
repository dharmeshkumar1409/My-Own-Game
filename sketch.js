var bg, bgImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;
var bg1;

var score = 0;

var gameState = "slingState";

function preload() {
    polygon_img = loadImage("ball.png");
    bgImg = loadImage("background1.jpg");
}

function setup() {
    engine = Engine.create();
    world = engine.world;

    createCanvas(900, 400);
    ground = new Ground();

    //level one
    block1 = new Block(550, 375);
    block2 = new Block(580, 375);
    block3 = new Block(610, 375);
    block4 = new Block(640, 375);
    block5 = new Block(670, 375);
    block6 = new Block(700, 375);
    block7 = new Block(580, 215);
    block8 = new Block(550, 215);
    //level two
    block9 = new Block(580, 335);
    block10 = new Block(610, 335);
    block11 = new Block(640, 335);
    block12 = new Block(670, 335);
    block13 = new Block(700, 335);
    block14 = new Block(610, 215);
    //level three
    block15 = new Block(610, 295);
    block16 = new Block(640, 295);
    block17 = new Block(670, 295);
    block18 = new Block(700, 295);
    //level four
    block19 = new Block(640, 255);
    block20 = new Block(670, 255);
    //level five
    block21 = new Block(550, 335);
  
    blocks1 = new Block(640, 215);
    blocks2 = new Block(580, 295);
    blocks3 = new Block(550, 295);
    blocks4 = new Block(670, 215);
    blocks5 = new Block(700, 215);
    //level two
    blocks6 = new Block(610, 255);
    blocks7 = new Block(580, 255);
    blocks8 = new Block(550, 255);
    //level three
    blocks9 = new Block(700, 255);

    //ball  with slings
    var option = {
        'restitution': 0.8,
        'friction': 1.0,
        'density': 2.5
    };

    ball = Bodies.circle(150, 200, 25, option);
    World.add(world, ball);

    slingShot = new SlingShot(this.ball, { x: 150, y: 200 });

}

function draw() {
    background(bgImg);
    Engine.update(engine);

    // ground.display();
    strokeWeight(2);
    stroke(15);

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();

    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();

    blocks1.display();
    blocks1.score();
    blocks2.display();
    blocks2.score();
    blocks3.display();
    blocks3.score();
    blocks4.display();
    blocks4.score();
    blocks5.display();
    blocks5.score();
    blocks6.display();
    blocks6.score();
    blocks7.display();
    blocks7.score();
    blocks8.display();
    blocks8.score();
    blocks9.display();
    blocks9.score();
    fill("black");
    textSize(25);
    text("Drag the Ball and Release to Destroy the Construction", 100, 50);
    textSize(25);
    text("Press Space to Get a chance Again to Destroy", 250, 350);

    slingShot.display();

    imageMode(CENTER);
    image(polygon_img, ball.position.x, ball.position.y, 80, 60);

    fill("white");
    textSize(30);
    text("Score: " + score, 700, 50);

}

function mouseDragged() {
    if (gameState === "slingState") {
        Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    gameState = "launchState";
    slingShot.fly();

}

function keyPressed() {
    if (keyCode === 32) {
        gameState = "slingState";
        slingShot.attach(this.ball);
        Matter.Body.setPosition(this.ball, { x: 150, y: 200 });
    }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, slingshot, stand, polygon;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

function setup() {
    createCanvas(900, 400);
    ground = new Ground(225, 315, 450, 10);
    stand = new Ground(675, 315, 450, 10);
    polygon = new Polygon(50, 200, 20);
    //Bottom
    box1 = new Box(300, 275, 30, 40);
    box2 = new Box(330, 275, 30, 40);
    box3 = new Box(360, 275, 30, 40);
    box4 = new Box(390, 275, 30, 40);
    box5 = new Box(420, 275, 30, 40);
    box6 = new Box(450, 275, 30, 40);
    box7 = new Box(480, 275, 30, 40);
    //Level Two
    box8 =  new Box(330, 235, 30, 40);
    box9 =  new Box(360, 235, 30, 40);
    box10 =  new Box(390, 235, 30, 40);
    box11 =  new Box(420, 235, 30, 40);
    box12 =  new Box(450, 235, 30, 40);
    //Level Three
    box13 =  new Box(360, 195, 30, 40);
    box14 =  new Box(390, 195, 30, 40);
    box15 =  new Box(420, 195, 30, 40);
    //Top
    box16 =  new Box(390, 155, 30, 40);
    
}

function draw() {
    background("blue")
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}
function keyPressed() {
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
function attach(body){
    BodyA = polygon.body;
}

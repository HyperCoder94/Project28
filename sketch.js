const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var ground;
var mango1;
var sling, stone;



function preload() {
    treeImg = loadImage("tree.png");
    boyImg = loadImage("boy.png");
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(750,690,1500,20);
    
    mango1 = new Mango(1090,330,30);
    mango2 = new Mango(1030,240,30);
    mango3 = new Mango(1200,270,30);
    mango4 = new Mango(1300,240,30);
    mango5 = new Mango(1240,180,30);
    mango6 = new Mango(1160,180,30);
    mango7 = new Mango(1070,160,30);

   stone = new Stone(175,420,50);

   sling = new SlingShot(stone.body,{x:175,y:420});
   

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1500,
          height: 700,
          wireframes: false
        }
      });
        
        Engine.run(engine);

}

function draw(){
    background(255);
   // Engine.update(engine);
    
    ground.display();

    image(treeImg, 900, 10, 500,700);
    image(boyImg, 130,300,250,500);

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    sling.display();
    stone.display();

    detectcollision(stone,mango1);
    detectcollision(stone,mango2);
    detectcollision(stone,mango3);
    detectcollision(stone,mango4);
    detectcollision(stone,mango5);
    detectcollision(stone,mango6);
    detectcollision(stone,mango7);
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();

}
function detectcollision(lstone,lmango){
    
      mangoBodyPosition=lmango.body.position 
      stoneBodyPosition=lstone.body.position
       var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
       if(distance<=lmango.r+lstone.r) {  
       Matter.Body.setStatic(lmango.body,false); }
     }












const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;
var drops = [];
var lightning = null;

function preload() {
    thunderImg = loadImage("images/lightning.png");
    thunderImg2 = loadImage("images/lightning2.png");
}

function setup(){
   createCanvas(400, 600);

   engine = Engine.create();
   world = engine.world;

   for (var i = 0; i < maxDrops; i++) {
    drops.push(new Drop(random(0, 400), random(0, 400)));
   }

   umbrella = new Umbrella(200, 325); 

   Engine.run(engine);
}

function draw(){
    background("black");

    umbrella.display(); 

    for (var i = 0; i < maxDrops; i++) {
        drops[i].display();    
        drops[i].update();
    }

    if (frameCount % 90 === 0) {
        var lightning = createSprite(200, 50, 200, 20);
        var rand = Math.round(random(1, 2));
        switch(rand) {
            case 1: lightning.addImage(thunderImg);
            break;
            case 2: lightning.addImage(thunderImg2);
            break;
        }   
        lightning.scale = 0.5;
        drawSprites();
    }
}   
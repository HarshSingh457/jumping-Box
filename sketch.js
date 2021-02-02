var canvas;
var music,music2;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
music2=loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(700,550);

    surface1 = createSprite(20,540,220,30);
    surface1.shapeColor = "blue";

    surface2 = createSprite(245,540,135,30);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(440,540,145,30);
    surface3.shapeColor = "purple";

    surface4 = createSprite(635,540,135,30);
    surface4.shapeColor = "red";

    box = createSprite(200,20,35,35);
    box.shapeColor = rgb(255,255,255);
    box.x=Math.round(random(50,550))
    box.velocityX = 8;
    box.velocityY = 13;

}

function draw() {
    background(rgb(129,129,129));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);


  if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "blue";
    music.play();
    music2.stop();
    }

    if(surface2.isTouching(box)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
        music2.stop();

    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "purple";
        music2.play();
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "red";
    }

drawSprites();
}
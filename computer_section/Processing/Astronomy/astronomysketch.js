let follow = 0;
let stopTop,
  stopBlades,
  stopBody,
  haveTop,
  haveBlades,
  haveBody,
  compTop,
  compBlades,
  compBody, complete = false;
let keep = 0;
let topPic;
let bladesPic;
let bodyPic;
let FR = 60;
//helicopter flying animaiton
let checkHeliFly = 0;
let HeliFlyAni = [];
let helianimation = 1;
//scene managers
let assemblyBackground = true;
let playerAnimationManager = 0;
//scrolling background managers
let scrollingBackground;
let scrX = 0;
let moveX = 0;
let doneScrX = false;
//Helicopter movement Parameters
let heliX = 78;
let heliY = 336;
let heliMoveSpeedX = 1;
let heliMoveSpeedY = 1;
let landed = false;

//text on screen not concole
const consoleText = document.getElementById("console-text");


function preload() {
  topPic = loadImage("Heli Parts/Top.png");
  bladesPic = loadImage("Heli Parts/Blades.png");
  bodyPic = loadImage("Heli Parts/Body.png");
  NASA_background = loadImage("backgrounds/NASA_assembly.png");
  scrollingBackground = loadImage("backgrounds/Mars_surface.png");

  //loading the right flying animaiton into a list
  for (checkHeliFly = 1; checkHeliFly < 3; checkHeliFly++) {
    HeliFlyAni[checkHeliFly] = loadImage(
      "Animation/Ingenuity" + checkHeliFly + ".png"
    );
  }
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('container1');
  console.log("use your mouse to build ingenuity\nthen use your arrow keys to fly and land it on mars!\nmakesure to click on the game!")
  // consoleText.innerHTML = "use your mouse to build ingenuity\nthen use your arrow keys to fly and land it on mars!\nmakesure to click on the game!";
  frameRate(FR);
}

function draw() {
  // background(220);
  backGround();
  // if (mouseIsPressed === true) {
  //   console.log("clicked on the game!");
  // }
  if (!complete) {
    moveAndCheckPart();
    drawHeli();
  } else {
    if(!doneScrX){
      moveHeli();
    }
  }
}

function drawHeli() {
  push();
  textSize(10);
  text(
    "Weight: 4 pounds (1.8 kg)\nMars Weight: 1.5 pounds\nHeight: about 19 inches (0.49 meters)",
    100,
    343
  );
  text(
    "Solar-powered and recharges\non its own\nWireless communication system",
    235,
    50
  );
  text(
    "Made of carbon fiber\nfoam core provide\nlift in the thin\nMars atmosphere.\nRotor Spann \nabout 4 feet",
    3,
    300
  );
  text(
    "Legs are made of carbon\nfiber to help in landings\nbody has all the computer\nsystem to fly the hecopter\nas well as a black and\nwhite and color cameras \nand 2 LIthium Ion batteries",
    280,
    310
  );
  pop();
  //top peice
  push();
  imageMode(CENTER);
  image(topPic, 200, 100, 200, 200);
  //blades
  imageMode(CENTER);
  image(bladesPic, 41, 290, 100, 100);
  //bottom
  imageMode(CENTER);
  image(bodyPic, 350, 275, 100, 100);
  pop();
  if (follow == 1) {
    //top
    push();
    imageMode(CENTER);
    image(topPic, mouseX, mouseY + 40, 200, 200);
    pop();
  } else if (follow == 2) {
    //blades
    push();
    imageMode(CENTER);
    image(bladesPic, mouseX, mouseY + 30, 200, 200);
    pop();
  } else if (follow == 3) {
    //body
    push();
    imageMode(CENTER);
    image(bodyPic, mouseX, mouseY, 200, 200);
    pop();
  } else {
    push();
    imageMode(CENTER);
    //top peice
    image(topPic, 200, 100, 200, 200);
    //blades
    image(bladesPic, 41, 290, 100, 100);
    //bottom
    image(bodyPic, 350, 275, 100, 100);
    pop();
  }
  if (stopTop == true && haveTop == true) {
    push();
    imageMode(CENTER);
    // rect(180, 220, 40, 40);
    // text("top",193, 225);
    image(topPic, 200, 282, 200, 200);
    compTop = true;
    pop();
  }
  if (stopBlades == true && haveBlades == true) {
    push();
    imageMode(CENTER);
    // rect(180,240,40,40);
    // text("blades",182, 260);
    image(bladesPic, 200, 282, 200, 200);
    compBlades = true;
    pop();
  }
  if (stopBody == true && haveBody == true) {
    push();
    imageMode(CENTER);
    // rect(180, 280, 40, 40);
    // text("body", 190, 300);
    image(bodyPic, 200, 282, 200, 200);
    compBody = true;
    pop();
  }

  if (compTop && compBlades && compBody) {
    complete = true;
    // console.log("complete");
  }
}

function moveAndCheckPart() {
  //checking to move the part
  if (mouseX >= 180 && mouseX <= 220 && mouseY >= 31 && mouseY <= 71) {
    //top
    follow = 1;
    haveTop = true;
  }
  if (mouseX >= 21 && mouseX <= 61 && mouseY >= 255 && mouseY <= 295) {
    //blades
    follow = 2;
    haveBlades = true;
  }
  if (mouseX >= 330 && mouseX <= 370 && mouseY >= 255 && mouseY <= 295) {
    //body
    follow = 3;
    haveBody = true;
  }
  //checking to stop moving the part
  if (
    mouseX >= 180 &&
    mouseX <= 220 &&
    mouseY >= 220 &&
    mouseY <= 260 &&
    haveTop == true
  ) {
    stopTop = true;
  }
  if (
    mouseX >= 180 &&
    mouseX <= 220 &&
    mouseY >= 240 &&
    mouseY <= 280 &&
    haveBlades == true
  ) {
    stopBlades = true;
  }
  if (
    mouseX >= 180 &&
    mouseX <= 220 &&
    mouseY >= 280 &&
    mouseY <= 320 &&
    haveBody == true
  ) {
    stopBody = true;
  }
}

function backGround() {
  push();
  if (!complete) {
    imageMode(CORNER);
    image(NASA_background, 0, 0);
  // } else if(!doneScrX){
  }else if(landed){
    heliMoveSpeedX = 0;
    moveX = 0;
    image(scrollingBackground, scrX, 0);
    push();
    imageMode(CENTER);
    image(HeliFlyAni[1], heliX, heliY, 200, 200);
    pop();
    text("ingenuity took flight For the first time on April 19, 2021\ningenuity climbed to about 10 feet (3 meters) above\nthe martion ground hovered in the air for a period of\nabout 28 seconds made a turn and then landed.\nthis was a very big achievement for the human race\nthe very first powered and controlled\nflight on Mars and the first flight beyond earth.",80, 60)
  }else{
    image(scrollingBackground, scrX, 0);
    
  }
  pop();
}

function moveHeli() {
  if(landed){
    heliMoveSpeedX = 0;
    moveX = 0;
  }else{
  if(frameCount % 6 == 1){
    if(helianimation == 2){
      helianimation = 1;
    }else{
      helianimation++;
    }
  }
  if(scrX * -1 > 200) {
    heliMoveSpeedX = 1;
    moveX = 0;
    if(heliY <= 336 && heliY >= 300){
      landed = true;
      console.log("landed!");
      // consoleText.innerHTML = "Landed!";
    }
  } else if (heliX == 1600) {
    heliMoveSpeedX = 0;
    moveX = 1;
  } else {
    heliMoveSpeedX = 1;
    moveX = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    heliY -= heliMoveSpeedY;
  }
  if (keyIsDown(DOWN_ARROW)) {
    heliY += heliMoveSpeedY;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    heliX += heliMoveSpeedX;
    scrX -= moveX;
  }
  if (keyIsDown(LEFT_ARROW)) {
    heliX -= heliMoveSpeedX;
    scrX += moveX;
  }
  }
  push();
  imageMode(CENTER);
  image(HeliFlyAni[helianimation], heliX, heliY, 200, 200);
  pop();
}

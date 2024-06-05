function setup() {
    createCanvas(900, 400);
  }
  
  function draw() {
    
    fill("orange");
  
    console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 50);
    }
  }
  
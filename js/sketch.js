var dots = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create objects
  for (var i=0; i<50; i++) {
    dots.push(new Dot());
  }
}

function draw() {
  background(255);
  for (var i=0; i<dots.length; i++) {
    dots[i].move();
    dots[i].display();
  }
}

function Dot() {
  this.x = width / 2;
  this.y = height / 2;
  this.diameter = 1;
  this.xSpeed = random(-3,3);
  this.ySpeed = random(-3,3);

  this.move = function() {
    if((this.x + this.xSpeed) > width || (this.x + this.xSpeed) < 0) {
      this.xSpeed = this.xSpeed * -1;
    }
  
    if((this.y + this.ySpeed) > height || (this.y + this.ySpeed) < 0){
       this.ySpeed = this.ySpeed * -1;
     }

    else{   
      this.x += this.xSpeed;
     this.y += this.ySpeed;
    }
  };

  this.display = function() {
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

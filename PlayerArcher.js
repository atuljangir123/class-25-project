class PlayerArcher {
    constructor(x, y, width, height){
        var options = {
          isStatic:true
          };

        this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("assets/playerArcher.png");

    World.add(world, this.body);
    }
   
  
    display() {
      if (MOVE === "UP" && PlayerArcher.body.angle < 1.77){
        angleValue = 0.1;
      }else{angleValue = -0.1;}

      if (MOVE === "DOWN" && PlayerArcher.body.angle > 1.47){
        angleValue = -0.1;
      }else{angleValue = 0.1;}

      
      Matter.Body.setAngle(this.body,-PI/2);
        var pos = this.body.position;
        var angleValue = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }
  
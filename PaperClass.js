class PaperClass{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.8,
            'friction':10,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, [options]) 
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 90,90);
        pop();
        
        if(keyWentDown("up")){
          Body.applyForce(this.body,{x:this.body.position.x, y:this.body.position.y},{x:0.02,y:-0.04})
        }
      
      }
}
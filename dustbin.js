class Dustbin{
    constructor(x, y, width, height){
        var options = {
         isStatic: true,
         restitution: 0,
         friction: 1,
         density: 0.1
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
     push();
     rectMode(CENTER);
     strokeWeight(3);
     fill("white");
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
    }
}
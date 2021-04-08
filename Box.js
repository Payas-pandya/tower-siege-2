class Box {
    constructor(x, y, width, height, visibility){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height; 
        World.add(World, this.body);
      
    }
    display(){
        var pos = this.body.position;
        rectmode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        Box.visibility-5;
    }
  visibility() {
      push()
    if(Box.velocity < 3 ){
        Box.display = true;
    }
    if(polygon.isTouching(Box)){
        Box.tint()
    }
    pop()
   }   
  }
  
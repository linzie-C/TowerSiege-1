class BlockGreen {
    constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    push();
    rectMode(CENTER);
    strokeWeight(3);
    fill(116, 242, 122);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
  }
}
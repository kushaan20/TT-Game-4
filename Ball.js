class Ball{
 constructor(){
    var options = {
        //'restitution':0.5,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(200,200,20,options);
    World.add(world, this.body);
 }

 display(){
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

 }
}
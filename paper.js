class Paper{
constructor(x,y,ellipse){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.ellipse=ellipse;
   this.body = Bodies.circle(this.x,this.y,this.ellipse,options)
   World.add(world,this.body)
}
display(){
        this.paperpos=this.body.position;
        this.paper.x=paper.position.x
        this.paper.y=paper.position.y
        push()
        translate(this.paperpos.x,this.paperpos.y)
        ellipseMode(CENTRE);
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.radius,this.radius)
        pop();
}
}
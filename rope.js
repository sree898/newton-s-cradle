class rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        constructor(bodyA,bodyB,OffsetX,OffsetY);
         
        this.OffsetX=OffsetX
        this.OffsetY=OffsetY

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB: {x:this.OffsetX,y:this.OffsetY};


        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
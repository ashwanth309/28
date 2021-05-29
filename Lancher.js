class Lancher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,                                                                    
            stiffness: 0.04,
            length: 4
        }
        this.pointB=pointB;                                                                
        this.Lancher = Constraint.create(options);
        World.add(world, this.Lancher);

    }
       fly(){                                                                                                           
        this.Lancher.bodyA = null;                                                             
      }                                                                                                                        
    display(){
        if(this.lancher.bodyA)                                                                            
        {                                                                                                                               

        
        var pointA = this.lancher.bodyA.position;
        var pointB = this.pointB;                                                                                     
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
         }
}
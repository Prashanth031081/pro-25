class Paper
{
	constructor(x,y,r)
}
		var options=
        {
			isStatic:false,
            restitution:0.4,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(this.x, this.y, this.y/2,options);
        World.add(world, this.Body)


        display()
	{	
			var Pos=this.body.position;		
			push()
			translate(Pos.x, Pos.y);
			ImageMode(CENTER)
			strokeWeight(3);
			//fill(128,128,128)
			//ellipse(0,0,this.w, this.h);
            image(this.image,0,0,this.r,this.r)
			pop()
			
	}


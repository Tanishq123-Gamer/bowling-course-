class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/pins.png");
    this.tintVisibility=255;
  }
    appear() {
          if (this.body.speed<7) {
            super.display();
          } 
          
          else {
            World.remove(world,this.body);
            push();
            this.tintVisibility=this.tintVisibility-5
            tint(255,this.tintVisibility);
            image(this.image,this.body.position.x,this.body.position.y,70,70);
            pop();
          }
    
  }

};

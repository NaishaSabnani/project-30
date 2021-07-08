class Block{
  constructor(x, y, width, height) {
    super(x,y,width,height);
      var options = {
          restitution :0.4,
          friction :0.0,
          visibility:225,

      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      super(x,y,width,height)
      this.image=loadImage("block.png")
      this.Visibility=255

      
    }
    display(){
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
      if(this.body.speed<3)
      {
        super.display();
      }
      else{
  
       World.remove(world,this.body)
       push();
       this.Visibility=this.Visibiity-5
       tint(255,this.Visibility)
       
       pop();
      }
    }
    }

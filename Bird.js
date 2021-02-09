class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.ar =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.ar.push(position);
    }
    
    // for loopinitialisation , condition,increment/decrement
// i= i+1 is the same as i++
// - x and y = 0 and 1


    for(var i=0; i<this.ar.length; i= i +1){
      image(this.smokeImage, this.ar[i][0], this.ar[i][1]);
    }
  }
}

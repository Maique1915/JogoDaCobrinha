class Apple{
  constructor(W,H) {
    this.W = W;
    this.H = H;
    this.direction = [0,-1];
    this.size = 20;
    this.body;
    this.color = "#860000";
    this.colision();
  }

  render(ctx){
    ctx.fillStyle= this.color;
      ctx.fillRect(this.body[0]*this.size,this.body[1]*this.size,this.size,this.size);
  }

  update(){
    //let next = [this.body[0],this.body[1]];
  }

  colision(){
          this.body = [Math.floor(Math.random()*Math.floor(this.W/this.size)),Math.floor(Math.random()*Math.floor(this.H/this.size))];
    //let next = [this.body[0],this.body[1]];
  }

  click(event){}
}

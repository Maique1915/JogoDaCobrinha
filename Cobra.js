class Cobra{
  constructor(W,H) {
    this.W = W;
    this.H = H;
    this.direction = [0,-1];
    this.size = 20;
    this.body = [[10,10],[10,10],[10,10]];
    this.color = "#FF8C00";
  }

  render(ctx){
    ctx.fillStyle= this.color;
    for (let i = 0; i < this.body.length; i++) {
      ctx.fillRect(this.body[i][0]*this.size,this.body[i][1]*this.size,this.size,this.size);
    }
  }

  update(estado){
    if (this.body[0][0] < 0) {
      this.body[0][0] = Math.floor((this.W-1)/this.size);//arredondo para baixo porque divisao retona reais e quero inteiros
    }
    if (this.body[0][0] > (this.W-1)/this.size) {
      this.body[0][0] = 0;
    }
    if (this.body[0][1]  > (this.H-1)/this.size) {
      this.body[0][1] = 0;
    }
    if (this.body[0][1]  < 0) {
      this.body[0][1] = Math.floor((this.W-1)/this.size);
    }

    if(estado == 0){
        //console.log("1");
        console.log("game over");

      }else if(estado == 1){

      }else if(estado == 2){
        let next = [this.body[0][0]+ this.direction[0],this.body[0][1]+ this.direction[1]];
        this.body.pop();
        this.body.unshift(next);
        console.log("play");
      }else if(estado == 3){
        console.log("pause");

      }
  }

  click(event){
    switch (event.keyCode) {
      case 37: // Left
        this.direction = [-1,0];
        break;
      case 38: // up
        this.direction = [0,-1];
        break;
      case 39: // right
        this.direction = [1,0];
        break;
      case 40: // down
        this.direction = [0,1];
        break;
      default:
        break;
    }
  }
  
  colision(){
    this.body.push(this.body[this.body.length-1]);
  }
}

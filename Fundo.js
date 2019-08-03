class Fundo{
	constructor(W,H) {
	    this.W = W;
	    this.H = H;
	    this.color = ["#006400","#008000"];
	    this.size = 20;
	}

	render(ctx){
		for (var i = 0; i < Math.floor(this.W/this.size); i++) {
			for (var j = 0; j < Math.floor(this.H/this.size); j++) {
				ctx.fillStyle = (i+j)%2 == 0 ?this.color[0]:this.color[1];
				ctx.fillRect(i*this.size,j*this.size,this.size,this.size);
			}			
		}
	}
	update(){}
	tick(){}
	click(){}
}
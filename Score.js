class Score{
	constructor(W,H) {
    	this.W = W;
    	this.H = H;
    	this.s = 0;
	}

	render(ctx){
		ctx.fillStyle = "#ADD8E6";
		 ctx.font = "20px Arial";
		ctx.fillText("Pontuação: "+this.s, 10, 20);
	}
	update(){}
	tick(){}
	click(){}
	colision(){
		this.s++;
	}
}
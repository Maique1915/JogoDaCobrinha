"use script";

class Controller{
	constructor(){
		this.canvas = new Canvas();

		this.H = screen.width;
		this.W = screen.height;

		if (this.H >= 500) {
			this.W = 600;
			this.H = 600;
		}

		this.canvas.width = this.W;
		this.canvas.height = this.H;

	  	document.body = document.createElement("body");
		let c = document.createElement("center");
		c.appendChild(this.canvas);
		document.body.appendChild(c);
	  	document.addEventListener("keydown", this.click.bind(this));//bind espesificando que o metodo click pede os atributos do evento
		this.ctx = this.canvas.getContext("2d");
		this.estado = 1;
		this.inicia = 3;
		this.cont = 1;

	  	this.init();
	  	this.run(this);
	}

	init(){
		this.fundo = new Fundo(this.W,this.H);
		//this.W-=10;this.H-=10;
		this.cobra = new Cobra(this.W,this.H);
		this.apple = new Apple(this.W,this.H);
		this.score = new Score(this.W,this.H);
		this.frames = 7;
	}

	run(self){
		self.render();
		self.update();
		self.colision();
	  	setInterval(this.run, 1000/this.frames,this);
	}

	render(){
		this.fundo.render(this.ctx);
		this.apple.render(this.ctx);
		this.cobra.render(this.ctx);
		this.score.render(this.ctx);
		if (this.estado == 0) {//fim jogo
			this.ctx.fillStyle = "#fff";
		 	this.ctx.font = "50px Arial";
			this.ctx.fillText("GAME OVER", (this.W/4), (this.H/1.78));
		}else if (this.estado == 1) {//inicia
			this.ctx.fillStyle = "#fff";
		 	this.ctx.font = "50px Arial";
			this.ctx.fillText("INICIA "+(this.inicia), (this.W/2.68), (this.H/1.78));
		} else if(this.estado == 2){//jogando

		}else if(this.estado == 3){//pausa
			this.ctx.fillStyle = "#fff";
		 	this.ctx.font = "50px Arial";
			this.ctx.fillText("PAUSE", (this.W/2.75), (this.H/1.78));
		}
	}

	update(){
		if (this.estado == 0) {//fim jogo
			
		}else if (this.estado == 1) {//inicia jogo
			if (this.inicia == 3 && this.cont == 1) {
				this.init();
				//alert("ini");
			}
			if (this.cont%this.frames == 0) {
				this.inicia--;
			} else if(this.inicia == 0) {
				this.estado = 2;
				this.cont = 0;
				this.inicia = 3;
			}
			this.cont++;
		} else if(this.estado == 2){//jogando

		}else{//pausa
		}
		this.score.update();
		this.apple.update();
		this.cobra.update(this.estado);
	}

	click(event){
		if(event.keyCode == 32){
			if(this.estado == 0){
				this.estado = 1;
			}else if(this.estado == 1){
				this.estado == 2;
			}else if(this.estado == 2){
				this.estado = 3;
			}else if(this.estado == 3){
				this.estado = 2;
			}
		}
		this.cobra.click(event);
		this.apple.click(this.colision());
	}

	colision(){
		if(this.cobra.body[0][0] == this.apple.body[0] && this.cobra.body[0][1] == this.apple.body[1]){
			this.apple.colision();
			this.score.colision();
			this.cobra.colision();
		}
		for (var i = 1; i < this.cobra.body.length; i++) {
			if(this.cobra.body[0][0] == this.cobra.body[i][0] && this.cobra.body[0][1] == this.cobra.body[i][1]){
				if((this.cobra.body[0][0] != this.cobra.body[1][0] || this.cobra.body[0][1] != this.cobra.body[1][1]) && this.estado > 1){
					this.estado = 0;
				}
			}
		}
	}
}

new Controller();
class Canvas{
	constructor(){
		this.canvas = document.createElement("canvas");
		this.canvas.style.border = "1px solid #000";
		this.canvas.style.margin = "auto";

		return this.canvas;
	}
}
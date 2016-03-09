var menu;

function Menu() {
	this.current_option = 0;
	this.options = ["normal", "hard", "genocide"];
}

Menu.prototype.show = function() {
	console.log("menu shown");
}

Menu.prototype.moveUp = function() {
	this.current_option -= 1;
	if (this.current_option < 0){
		this.current_option += this.options.length;
	}
	this.updateHeartPosition();
}

Menu.prototype.moveDown = function() {
	this.current_option += 1;
	if (this.current_option >= this.options.length){
		this.current_option -= this.options.length;
	}
	this.updateHeartPosition();
}

Menu.prototype.select = function() {
	gamestate.restartGame(this.options[this.current_option]);
}

Menu.prototype.updateHeartPosition = function(pos) {
	heart.pos_x = 80;
	heart.pos_y = 240;
}

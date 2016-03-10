var menu;

function Menu() {

	this.shown = false;
	this.shown_done = false;

	this.current_option = 0;
	this.options = ["normal", "hard", "genocide"];

	this.normal_text = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
	this.normal_text.position.set(80, 300);
	this.normal_text_chars = 0;
	this.hard_text = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
	this.hard_text.position.set(80, 332);
	this.hard_text_chars = 0;
	this.genocide_text = new PIXI.extras.BitmapText("", {font: "18px Undertale"});
	this.genocide_text.position.set(80, 364);
	this.genocide_text_chars = 0;

	this.normal_text_text = "I want to PET THE VEGETABLES";
	this.hard_text_text = "I want to FIGHT THE TRUE HERO";
	this.genocide_text_text = "I want to ATONE FOR MY SINS";

	gameplay_stage.addChild(this.normal_text);
	gameplay_stage.addChild(this.hard_text);
	gameplay_stage.addChild(this.genocide_text);

}

Menu.prototype.update = function(delta_ms) {

	if (!this.shown || this.shown_done) return;

	this.normal_text_chars += Math.random() * 0.05 * delta_ms;
	this.hard_text_chars += Math.random() * 0.05 * delta_ms;
	this.genocide_text_chars += Math.random() * 0.05 * delta_ms;

	if (this.normal_text_chars >= this.normal_text_text.length &&
		this.hard_text_chars >= this.hard_text_text.length &&
		this.genocide_text_chars >= this.genocide_text_text.length) {
		this.shown_done = true;
	}

	this.normal_text.text = this.normal_text_text.substr(0, Math.floor(this.normal_text_chars));
	this.hard_text.text = this.hard_text_text.substr(0, Math.floor(this.hard_text_chars));
	this.genocide_text.text = this.genocide_text_text.substr(0, Math.floor(this.genocide_text_chars));

}

Menu.prototype.show = function() {

	gamestate.state = "menu";

	this.shown = true;
	heart.sprite.visible = true;
	this.updateHeartPosition();

	box.dest_left = 16;
	box.dest_right = 624;
	box.dest_top = 240;
	box.dest_bottom = 420;

	this.normal_text.visible = true;
	this.hard_text.visible = true;
	this.genocide_text.visible = true;

}

Menu.prototype.hide = function() {

	gamestate.state = "none";

	this.shown = false;

	this.normal_text.visible = false;
	this.hard_text.visible = false;
	this.genocide_text.visible = false;

}

Menu.prototype.moveUp = function() {
	se_menu_move.play();
	this.current_option -= 1;
	if (this.current_option < 0){
		this.current_option += this.options.length;
	}
	this.updateHeartPosition();
}

Menu.prototype.moveDown = function() {
	se_menu_move.play();
	this.current_option += 1;
	if (this.current_option >= this.options.length){
		this.current_option -= this.options.length;
	}
	this.updateHeartPosition();
}

Menu.prototype.select = function() {
	this.hide();
	se_menu_select.play();
	gamestate.restartGame(this.options[this.current_option]);
}

Menu.prototype.updateHeartPosition = function(pos) {
	heart.sprite.position.set(60, 316 + this.current_option * 32);
}

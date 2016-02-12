function Heart() {

	// position relative to the BOX
	// counting from top-left corner

	this.pos_x = 320;
	this.pos_y = 240;

	// rel_pos_x is used in dual dodge+block mode. Don't worry for it for now.
	this.rel_pos_x = 320;
	this.rel_pos_y = 240;

	this.colour = "red";
	this.shield_dir = 3;

}

Heart.prototype.render = function(scene) {

}

var heart = new Heart();

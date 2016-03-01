var heart_texture;
var shield_texture;
var hp_text;

var heart_colours = {
	"red": 0xff0000,
	"green": 0x00ff00,
}

function Heart() {

	this.hp = 4; // always starts with 4 HP
	this.invincibility = 0;

	/* rendering info */

	// position relative to the BOX
	// counting from top-left corner

	this.pos_x = 320;
	this.pos_y = 240;

	// rel_pos_x is used in dual dodge+block mode. Don't worry for it for now.
	this.rel_pos_x = 320;
	this.rel_pos_y = 240;

	this.colour = "green";
	this.shield_dir = 3;

	this.abs_shield_dir = 3;
	this.target_rotation = Math.PI * 2;

	this.sprite = new PIXI.Sprite(heart_texture);
	this.sprite.anchor.x = 0.5;
	this.sprite.anchor.y = 0.5;
	this.sprite.position.x = this.pos_x;
	this.sprite.position.y = this.pos_y;
	this.sprite.tint = heart_colours[this.colour];

	this.shield_sprite = new PIXI.Sprite(shield_texture);
	this.shield_sprite.anchor.x = 0.5;
	this.shield_sprite.anchor.y = 1.4;
	this.shield_sprite.position.x = this.pos_x;
	this.shield_sprite.position.y = this.pos_y;
	this.shield_sprite.tint = 0xcdcdcd;
	this.shield_sprite.rotation = Math.PI / 2 * (1 + this.shield_dir);

	this.graphics = new PIXI.Graphics();
	gameplay_stage.addChild(this.graphics);

	gameplay_stage.addChild(this.sprite);
	gameplay_stage.addChild(this.shield_sprite);

}

Heart.prototype.update = function(delta_ms) {

	this.invincibility = Math.max(0, this.invincibility - 1);
	this.sprite.alpha = Math.cos(Math.PI * 2 * this.invincibility / 15) * 0.5 + 0.5;

	this.shield_sprite.rotation = 0.6 * this.shield_sprite.rotation + 0.4 * this.target_rotation;

}

Heart.prototype.setShieldDir = function(dir) {

	// set target rotation to the one with the least distance.
	var new_dir = dir;

	if (new_dir < this.shield_dir) new_dir += 4;

	if (new_dir - this.shield_dir <= 2) this.abs_shield_dir += new_dir - this.shield_dir;
	else this.abs_shield_dir += new_dir - 4 - this.shield_dir;

	this.shield_dir = dir;
	this.target_rotation = Math.PI / 2 * (1 + this.abs_shield_dir);

}

Heart.prototype.takeDamage = function(damage) {

	if (this.invincibility > 0) return;

	this.invincibility = 60;

	se_damage.play();
	this.hp = Math.max(0, this.hp - damage);

	hp_text.text = "0" + this.hp + " / 04";

}

Heart.prototype.render = function() {

	// draw the rectangle?
	this.graphics.clear();
	this.graphics.beginFill(0xba0f02);
	this.graphics.lineStyle(0, 0xFFFFFF);
	this.graphics.drawRect(262, 447, 28, 21);
	this.graphics.beginFill(0xffff00);
	this.graphics.drawRect(262, 447, this.hp * 7, 21);
	this.graphics.endFill();

}

var heart;

var heart_texture = new PIXI.Texture.fromImage("img/heart.png");
var shield_texture = new PIXI.Texture.fromImage("img/shield.png");

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

}

Heart.prototype.advanceOneFrame = function() {

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

}

var heart = new Heart();

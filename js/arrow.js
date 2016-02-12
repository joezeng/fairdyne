var arrow_texture = new PIXI.Texture.fromImage("img/arrow.png");

function Arrow (props) {

	this.direction = props.direction || 0;
	// 0 = up, 1 = right, 2 = down, 3 = left

	this.turntype = props.turntype || 0;
	// 0 = straight, 1 = turn right, 2 = u-turn right, 3 = u-turn left, 4 = turn left

	this.target_time = props.target_time || 0;
	// time when the shield destroys it.

	this.speed = props.speed || 0;
	// speed in px/s at which the arrows head toward the heart.

	this.colour = props.colour || "blue";
	// colour of the arrow
	/*
		Arrow colours
			blue: normal. Worth 1 block point.
			yellow: turns. Worth 2 block points.
	*/

	// setup sprites
	this.sprite = new PIXI.Sprite(arrow_texture);
	this.sprite.anchor.x = 0.9;
	this.sprite.anchor.y = 0.5;
	this.sprite.rotation = Math.PI / 2 * (this.direction + 2);
	this.sprite.tint = 0x00ffff;

	this.updatePosition();

}

Arrow.prototype.advanceOneFrame = function (delta) {
	this.target_time -= delta;

	if (this.target_time * this.speed < -SHIELD_DISTANCE + 8) {
		// arrow hit the heart
		this.removed = true;
	} else if (this.target_time <= 0 && this.direction == heart.shield_dir) {
		// arrow hit the shield
		this.removed = true;
	}

	this.updatePosition();
}

Arrow.prototype.updatePosition = function () {
	var delta_x = 0;
	var delta_y = 0;

	if (this.turntype == 0 || this.target_time * this.speed > SHIELD_DISTANCE + 40) {
		switch(this.direction){
			case 4:
				delta_x += this.target_time * this.speed + SHIELD_DISTANCE; break;
			case 1:
				delta_y += this.target_time * this.speed + SHIELD_DISTANCE; break;
			case 2:
				delta_x -= this.target_time * this.speed + SHIELD_DISTANCE; break;
			case 3:
				delta_y -= this.target_time * this.speed + SHIELD_DISTANCE; break;
		}
	} else if (this.turntype == 1) {

	}

	// update position
	this.sprite.position.x = heart.pos_x + delta_x;
	this.sprite.position.y = heart.pos_y + delta_y;
}



var arrows = [];

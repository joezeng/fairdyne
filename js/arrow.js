var arrow_texture;

const turntype_rotation = [0, 1, 2, 2, 3];
const turntype_tints = [0x2fd0ff, 0xffffff, 0xffdf23, 0xffdf23, 0xffffff];

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

	this.sprite.rotation = Math.PI / 2 * (this.direction + turntype_rotation[this.turntype] + 2);
	this.sprite.tint = turntype_tints[this.turntype];

}

Arrow.prototype.advanceOneFrame = function (delta) {

	this.target_time -= delta;

	if (this.target_time * this.speed < -SHIELD_DISTANCE + 8) {
		// arrow hit the heart
		heart.takeDamage(1);
		this.removed = true;
	} else if (this.target_time <= 0) {
		// arrow hit the shield
		if (this.direction % 4 == (heart.shield_dir + 4 - turntype_rotation[this.turntype]) % 4) {
			se_arrow_ding.play();
			this.removed = true;
		}
	}

	this.updatePosition();

}


function interp_clamp(v, start, end, f_start, f_end) {
	/*
		a linear function that clamps function return values
		between min and max and then interpolates outputs between
		f_start and f_end.
	*/
	if (v < start && end > start || v > start && end < start) return f_start;
	if (v > end && end > start || v < end && end < start) return f_end;
	else return f_start + ((f_end - f_start) * (v - start) / (end - start));
}


Arrow.prototype.updatePosition = function () {

	var delta_x = 0;
	var delta_y = 0;

	var distance = this.target_time * this.speed + SHIELD_DISTANCE;
	var rotation = 0;

	if (this.turntype == 0) {
		// do nothing, rotation is 0
	} else if (this.turntype == 1) {
		rotation = interp_clamp(this.target_time, 0.5, 0.25, 0, Math.PI / 2	);
	} else if (this.turntype == 2) {
		rotation = interp_clamp(this.target_time, 0.5, 0.25, 0, Math.PI	);
	} else if (this.turntype == 3) {
		rotation = interp_clamp(this.target_time, 0.5, 0.25, 0, - Math.PI );
	} else if (this.turntype == 4) {
		rotation = interp_clamp(this.target_time, 0.5, 0.25, 0, - Math.PI / 2);
	}

	switch(this.direction){
		case 4:
			delta_x += distance * Math.cos(rotation);
			delta_y += distance * Math.sin(rotation); break;
		case 1:
			delta_y += distance * Math.cos(rotation);
			delta_x -= distance * Math.sin(rotation); break;
		case 2:
			delta_x -= distance * Math.cos(rotation);
			delta_y -= distance * Math.sin(rotation); break;
		case 3:
			delta_y -= distance * Math.cos(rotation);
			delta_x += distance * Math.sin(rotation); break;
	}

	// update position
	this.sprite.position.x = heart.pos_x + delta_x;
	this.sprite.position.y = heart.pos_y + delta_y;

}



var arrows = [];

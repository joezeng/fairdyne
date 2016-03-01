function Box() {

	this.thickness = 4;

	this.left = 16;
	this.right = 624;
	this.top = 240;
	this.bottom = 420;

	this.dest_left = 320 - SHIELD_DISTANCE;
	this.dest_right = 320 + SHIELD_DISTANCE;
	this.dest_top = 240 - SHIELD_DISTANCE;
	this.dest_bottom = 240 + SHIELD_DISTANCE;

	this.graphics = new PIXI.Graphics();
	gameplay_stage.addChild(this.graphics);

}

Box.prototype.update = function(ms) {
	this.adjustBounds(ms);
}

const box_adjust_speed = 0.5;

Box.prototype.adjustBounds = function(ms) {

	if (this.left < this.dest_left)
		this.left = Math.min(this.dest_left, this.left + box_adjust_speed * ms);

	if (this.left > this.dest_left)
		this.left = Math.max(this.dest_left, this.left - box_adjust_speed * ms);

	if (this.right < this.dest_right)
		this.right = Math.min(this.dest_right, this.right + box_adjust_speed * ms);

	if (this.right > this.dest_right)
		this.right = Math.max(this.dest_right, this.right - box_adjust_speed * ms);

	if (this.top < this.dest_top)
		this.top = Math.min(this.dest_top, this.top + box_adjust_speed * ms);

	if (this.top > this.dest_top)
		this.top = Math.max(this.dest_top, this.top - box_adjust_speed * ms);

	if (this.bottom < this.dest_bottom)
		this.bottom = Math.min(this.dest_bottom, this.bottom + box_adjust_speed * ms);

	if (this.bottom > this.dest_bottom)
		this.bottom = Math.max(this.dest_bottom, this.bottom - box_adjust_speed * ms);

};


Box.prototype.render = function() {

	// draw the rectangle?
	this.graphics.clear();
	this.graphics.beginFill(0x000000);
	this.graphics.lineStyle(this.thickness, 0xFFFFFF);
	this.graphics.drawRect(
		(this.left - (this.thickness / 2)),
		(this.top - (this.thickness / 2)),
		(this.right - this.left + (this.thickness)),
		(this.bottom - this.top + (this.thickness))
	);
	this.graphics.endFill();

}


var box;

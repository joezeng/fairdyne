function Box() {

	this.thickness = 4;

	this.left = 320 - SHIELD_DISTANCE;
	this.right = 320 + SHIELD_DISTANCE;
	this.top = 240 - SHIELD_DISTANCE;
	this.bottom = 240 + SHIELD_DISTANCE;

	this.dest_left = this.left;
	this.dest_right = this.right;
	this.dest_top = this.top;
	this.dest_bottom = this.bottom;

	this.sprite = new PIXI.Rectangle(this.left, this.top, this.right - this.left, this.bottom - this.top);

}

Box.prototype.advanceOneFrame = function() {
	this.adjustBounds();
}

Box.prototype.adjustBounds = function() {

	if (this.left < this.dest_left)
		this.left = Math.min(this.dest_left, this.left + 4);

	if (this.left > this.dest_left)
		this.left = Math.max(this.dest_left, this.left - 4);

	if (this.right < this.dest_right)
		this.right = Math.min(this.dest_right, this.right + 4);

	if (this.right > this.dest_right)
		this.right = Math.max(this.dest_right, this.right - 4);

	if (this.top < this.dest_top)
		this.top = Math.min(this.dest_top, this.top + 4);

	if (this.top > this.dest_top)
		this.top = Math.max(this.dest_top, this.top - 4);

	if (this.bottom < this.dest_bottom)
		this.bottom = Math.min(this.dest_bottom, this.bottom + 4);

	if (this.bottom > this.dest_bottom)
		this.bottom = Math.max(this.dest_bottom, this.bottom - 4);

	this.sprite.x = this.left;
	this.sprite.y = this.top;
	this.sprite.width = this.right - this.left;
	this.sprite.height = this.bottom - this.top;

};


Box.prototype.render = function(scene) {

	// draw the rectangle?
	scene.clear();
	scene.beginFill(0x000000);
	scene.lineStyle(4, 0xFFFFFF);
	scene.drawRect(
		this.left - (this.thickness / 2),
		this.top - (this.thickness / 2),
		this.right - this.left + (this.thickness),
		this.bottom - this.top + (this.thickness)
	);
	scene.endFill();

}


var box = new Box();

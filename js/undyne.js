var undyne_texture;

function Undyne() {

	this.sprite = new PIXI.Sprite(undyne_texture);

	// move to undyne.js eventually

	this.sprite.anchor.x = 0.5;
	this.sprite.anchor.y = 0.5;

	this.sprite.position.x = 320;
	this.sprite.position.y = 140;
	this.sprite.position.z = -1;

	this.sprite.alpha = 0.1;

	gameplay_stage.addChild(this.sprite);

}

var undyne;

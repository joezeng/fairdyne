var spear_texture;

function Spear(props) {

	this.initial_position = props.initial_position || { x: 320, y: 320 };
	this.direction = props.direction || 0;

	this.sprite = new PIXI.Sprite(spear_texture);

}

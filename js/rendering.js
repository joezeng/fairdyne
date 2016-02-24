var renderer;

var stage;
var box_g, objects_g;



function setup_rendering() {

	// create a renderer instance and its stage.
	renderer = PIXI.autoDetectRenderer(640, 480, {transparent: true});
	stage = new PIXI.Container();

	var texture = PIXI.Texture.fromImage("img/undyne.gif");
	var undyne = new PIXI.Sprite(texture);

	// move to undyne.js eventually

	undyne.anchor.x = 0.5;
	undyne.anchor.y = 0.5;

	undyne.position.x = 320;
	undyne.position.y = 140;

	undyne.alpha = 0.5;

	stage.addChild(undyne);

	box_g = new PIXI.Graphics();
	stage.addChild(box_g);

	objects_g = new PIXI.Graphics();
	stage.addChild(objects_g);

	for (var a = 0; a < arrows.length; ++a) {
		stage.addChild(arrows[a].sprite);
	}

	stage.addChild(heart.sprite);
	stage.addChild(heart.shield_sprite);

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

}


var box_thickness = 4;

// render the current frame
function render() {

	box.render(box_g);

	// render the background, including Undyne
	renderer.render(stage);

}

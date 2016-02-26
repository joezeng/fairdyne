var renderer;

var stage;
var box_g, objects_g;


function setup_rendering() {

	// create a renderer instance and its stage.
	renderer = PIXI.autoDetectRenderer(640, 480, {transparent: true});
	stage = new PIXI.Container();

	box_g = new PIXI.Graphics();
	objects_g = new PIXI.Graphics();

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

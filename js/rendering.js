var device_scale = window.devicePixelRatio;
var renderer;

var stage;
var objects_g;

function setup_rendering() {

	// create a renderer instance and its stage.
	var width = 640, height = 480;
	renderer = PIXI.autoDetectRenderer(width, height,
		{transparent: true, resolution: window.devicePixelRatio});

	stage = new PIXI.Container();
	objects_g = new PIXI.Graphics();

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

}


var box_thickness = 4;

// render the current frame
function render() {

	// TODO: put this in scene code.
	box.render();
	heart.render();

	// render the background, including Undyne
	renderer.render(stage);

}

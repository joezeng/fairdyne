
function Scene() {

	this.scene_state = "";
	this.scene_frames = 0;

	/*
		Possible scene states:
		"loading",
		"undyne",
		"gameover"
	*/

};

Scene.prototype.selectScene = function(name, data) {

	this.scene_state = name;
	this.scene_frames = 0;

	switch(name) {
		case "loading":
			break;
	}

}

Scene.prototype.advanceOneFrame = function() {

	this.scene_frames += 1;

};

Scene.prototype.handleInput = function(input) {


};

var scene = new Scene();

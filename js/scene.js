var splash_stage;
var gameplay_stage;

function Scene() {

	this.scene_state = "loading";
	this.scene_time = 0;

	/*
		Possible scene states:
		"loading",
		"gameplay",
		"gameover"
	*/

};

Scene.prototype.selectScene = function(name, data) {

	this.scene_state = name;
	this.scene_time = 0;

	switch(name) {
		case "loading":
			break;
	}

}

Scene.prototype.update = function(delta_ms) {

	this.scene_time += delta_ms;

};


var scene = new Scene();

var splash_stage;
var gameplay_stage;

function Scene() {

	this.scene_state = "splash";
	this.scene_time = 0;

	/*
		Possible scene states:
		"splash",
		"gameplay"
	*/

};

Scene.prototype.selectScene = function(name, data) {

	this.scene_state = name;
	this.scene_time = 0;

}

Scene.prototype.update = function(delta_ms) {

	this.scene_time += delta_ms;

	switch(this.scene_state) {
		case "splash":
			splash_animation.update(delta_ms);
			break;
		case "gameplay":
			gamestate.update(delta_ms);
			break;
	}

};


var scene = new Scene();

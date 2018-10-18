key_is_down = {};

function handleKeyInput(key, dir) {

	if (!game_started) return false;

	if (dir == "down") {
		key_is_down[key] = true;
	} else if (dir == "up") {
		key_is_down[key] = false;
	}

	switch(scene.scene_state) {
		case "splash":
			if (dir == "down" && key == "A") {
				splash_animation.outro = true;
			}
			break;
		case "gameplay":
			if (dir == "down") gamestate.handleInput(key);
			break;
	}

}


function isKeyDown(key) {
	if (key_is_down[key]) return true;
	else return false;
}


function onKeyDown(e) {
	if (e.keyCode == 37) {  // left
		handleKeyInput("left", "down");
	} else if (e.keyCode == 38) {  // up
		handleKeyInput("up", "down");
	} else if (e.keyCode == 39) {  // right
		handleKeyInput("right", "down");
	} else if (e.keyCode == 40) {  // down
		handleKeyInput("down", "down");
	} else if (e.keyCode == 88) {  // X = B
		handleKeyInput("B", "down");
	} else if (e.keyCode == 90) {  // Z = A
		handleKeyInput("A", "down");
	}
}

function onKeyUp(e) {
	if (e.keyCode == 37) {  // left
		handleKeyInput("left", "up");
	} else if (e.keyCode == 38) {  // up
		handleKeyInput("up", "up");
	} else if (e.keyCode == 39) {  // right
		handleKeyInput("right", "up");
	} else if (e.keyCode == 40) {  // down
		handleKeyInput("down", "up");
	} else if (e.keyCode == 88) {  // X = B
		handleKeyInput("B", "up");
	} else if (e.keyCode == 90) {  // Z = A
		handleKeyInput("A", "up");
	}
}




document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);




function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if (gp) {


		handleKeyInput("up", gp.buttons[12].pressed || (gp.axes[1] < -0.7) ? "down" : "up");
		handleKeyInput("down", gp.buttons[13].pressed || (gp.axes[1] > 0.7) ? "down" : "up");
		handleKeyInput("left", gp.buttons[14].pressed || (gp.axes[0] < -0.7) ? "down" : "up");
		handleKeyInput("right", gp.buttons[15].pressed || (gp.axes[0] > 0.7) ? "down" : "up");
		handleKeyInput("A", gp.buttons[0].pressed ? "down" : "up");
		handleKeyInput("B", gp.buttons[1].pressed ? "down" : "up");
    }
  }
}

setInterval(pollGamepads, 80);

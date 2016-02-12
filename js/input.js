key_is_down = {};

function handleKeyInput(key, dir) {

	if (dir == "down") {
		key_is_down[key] = true;
		switch(key) {
			case "left":
				heart.shield_dir = 2;
				break;
			case "right":
				heart.shield_dir = 4;
				break;
			case "up":
				heart.shield_dir = 3;
				break;
			case "down":
				heart.shield_dir = 1;
				break;
			default:
				break;
		}
	} else if (dir == "up") {
		key_is_down[key] = false;
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
	}
}

function onKeyUp(e) {

}




document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

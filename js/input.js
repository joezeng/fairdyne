key_is_down = {};

function handleKeyInput(key, dir) {

	if (!game_started) return false;

	if (dir == "down") {
		key_is_down[key] = true;
		switch(key) {
			case "left":
				heart.setShieldDir(2);
				break;
			case "right":
				heart.setShieldDir(4);
				break;
			case "up":
				heart.setShieldDir(3);
				break;
			case "down":
				heart.setShieldDir(1);
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

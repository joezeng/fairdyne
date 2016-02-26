var game_started = false;

function start_game() {
	if (game_started == false) {
		game_started = true;
		requestAnimationFrame(update);
	}
}

function stop_game() {
	game_started = false;
}


var elapsed_time = 0;

// main game loop
function update() {
	if (game_started == true) requestAnimationFrame(update);
	elapsed_time += 1;

	box.advanceOneFrame();
	for (var a = 0; a < arrows.length; ++a) {
		arrows[a].advanceOneFrame(0.0166666);
		if (arrows[a].removed) {
			stage.removeChild(arrows[a].sprite);
			arrows.splice(a, 1);
		}
	}
	heart.advanceOneFrame();

	render();
}




window.onload = function() {

	setup_rendering();
	start_preload();

}

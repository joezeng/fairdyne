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

	render();
}




window.onload = function() {

	arrows = [
		new Arrow({ direction: 1, turntype: 0, target_time: 1, speed: 240, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 0, target_time: 1.3, speed: 240, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 1.6, speed: 240, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 0, target_time: 1.9, speed: 240, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 2.2, speed: 240, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 2.4, speed: 240, colour: "blue" }),
	];

	setup_rendering();
	start_game();

}

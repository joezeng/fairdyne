var game_started = false;
var update_time;

function start_game() {
	if (game_started == false) {
		game_started = true;
		update_time = new Date().getTime();
		requestAnimationFrame(update);
	}
}

function stop_game() {
	game_started = false;
}

// main game loop
function update() {

	if (game_started == true) requestAnimationFrame(update);

	var current_time = new Date().getTime();
	var delta_ms = current_time - update_time;
	update_time = current_time;

	gamestate.update(delta_ms);

	render();

}




window.onload = function() {

	setup_rendering();
	start_preload();

}

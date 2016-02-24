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

	arrows = [

		new Arrow({ direction: 3, turntype: 0, target_time: 1.0, speed: 320, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 1.4, speed: 320, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 0, target_time: 1.8, speed: 320, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 0, target_time: 2.2, speed: 320, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 0, target_time: 2.6, speed: 320, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 0, target_time: 3.0, speed: 320, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 0, target_time: 3.4, speed: 320, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 0, target_time: 3.8, speed: 320, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 4.2, speed: 320, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 2, target_time: 4.6, speed: 320, colour: "blue" }),

		new Arrow({ direction: 4, turntype: 0, target_time: 6.00, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 6.15, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 6.30, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 6.45, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 6.60, speed: 500, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 0, target_time: 6.80, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 6.95, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 7.10, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 7.25, speed: 500, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 0, target_time: 7.40, speed: 500, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 2, target_time: 7.60, speed: 500, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 2, target_time: 7.75, speed: 500, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 2, target_time: 7.90, speed: 500, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 2, target_time: 8.05, speed: 500, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 3, target_time: 8.25, speed: 500, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 3, target_time: 8.40, speed: 500, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 3, target_time: 8.55, speed: 500, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 3, target_time: 8.70, speed: 500, colour: "blue" }),

		new Arrow({ direction: 1, turntype: 4, target_time: 10.0, speed: 320, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 4, target_time: 10.2, speed: 320, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 4, target_time: 10.4, speed: 320, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 1, target_time: 10.6, speed: 320, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 1, target_time: 10.8, speed: 320, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 1, target_time: 11.0, speed: 320, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 1, target_time: 11.2, speed: 320, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 1, target_time: 11.4, speed: 320, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 4, target_time: 11.6, speed: 320, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 4, target_time: 11.8, speed: 320, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 4, target_time: 12.0, speed: 320, colour: "blue" }),
		new Arrow({ direction: 2, turntype: 4, target_time: 12.2, speed: 320, colour: "blue" }),
		new Arrow({ direction: 3, turntype: 4, target_time: 12.4, speed: 320, colour: "blue" }),
		new Arrow({ direction: 4, turntype: 4, target_time: 12.6, speed: 320, colour: "blue" }),
		new Arrow({ direction: 1, turntype: 4, target_time: 12.8, speed: 320, colour: "blue" }),

	];

	setup_rendering();
	start_game();

}

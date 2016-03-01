var arrow_groups = {};

function ArrowGroup () {
	// time before _next_ arrow set starts appearing.
	this.id = "";
	this.next_time = 0;
	this.arrows = [];
	this.next_sets = [];
}

// testing arrow group
var ag1 = new ArrowGroup();
ag1.id = "ag1";
ag1.next_time = 4.0;
ag1.arrows = [
	{ direction: 3, turntype: 0, target_time: 0.0, speed: 320, colour: "blue" },
	{ direction: 3, turntype: 0, target_time: 0.4, speed: 320, colour: "blue" },
	{ direction: 4, turntype: 0, target_time: 0.8, speed: 320, colour: "blue" },
	{ direction: 4, turntype: 0, target_time: 1.2, speed: 320, colour: "blue" },
	{ direction: 2, turntype: 0, target_time: 1.6, speed: 320, colour: "blue" },
	{ direction: 2, turntype: 0, target_time: 2.0, speed: 320, colour: "blue" },
	{ direction: 1, turntype: 0, target_time: 2.4, speed: 320, colour: "blue" },
	{ direction: 1, turntype: 0, target_time: 2.8, speed: 320, colour: "blue" },
	{ direction: 3, turntype: 0, target_time: 3.2, speed: 320, colour: "blue" },
	{ direction: 3, turntype: 2, target_time: 3.6, speed: 320, colour: "blue" },
];
ag1.next_sets = ["ag2"];

// testing arrow group
var ag2 = new ArrowGroup();
ag2.next_time = 4.0;
ag2.arrows = [
	{ direction: "R", turntype: 0, target_time: 0.00, speed: 500, colour: "blue" },
	{ direction: "R", turntype: 0, target_time: 0.15, speed: 500, colour: "blue" },
	{ direction: "-0", turntype: 0, target_time: 0.30, speed: 500, colour: "blue" },
	{ direction: "-0", turntype: 0, target_time: 0.45, speed: 500, colour: "blue" },
	{ direction: "-0", turntype: 0, target_time: 0.60, speed: 500, colour: "blue" },
	{ direction: "R", turntype: 0, target_time: 0.80, speed: 500, colour: "blue" },
	{ direction: "R", turntype: 0, target_time: 0.95, speed: 500, colour: "blue" },
	{ direction: "-0", turntype: 0, target_time: 1.10, speed: 500, colour: "blue" },
	{ direction: "-0", turntype: 0, target_time: 1.25, speed: 500, colour: "blue" },
	{ direction: "-0", turntype: 0, target_time: 1.40, speed: 500, colour: "blue" },
	{ direction: "R", turntype: 2, target_time: 1.60, speed: 500, colour: "blue" },
	{ direction: "R", turntype: 2, target_time: 1.75, speed: 500, colour: "blue" },
	{ direction: "+0", turntype: 2, target_time: 1.90, speed: 500, colour: "blue" },
	{ direction: "+0", turntype: 2, target_time: 2.05, speed: 500, colour: "blue" },
	{ direction: "R", turntype: 3, target_time: 2.25, speed: 500, colour: "blue" },
	{ direction: "R", turntype: 3, target_time: 2.40, speed: 500, colour: "blue" },
	{ direction: "+0", turntype: 3, target_time: 2.55, speed: 500, colour: "blue" },
	{ direction: "+0", turntype: 3, target_time: 2.70, speed: 500, colour: "blue" },
];
ag2.next_sets = ["ag3"];


var ag3 = new ArrowGroup();
ag3.next_time = 4.0;
ag3.arrows = [
	{ direction: "R", turntype: 4, target_time: 0.0, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 0.2, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 0.4, speed: 320, colour: "blue" },
	{ direction: "-1", turntype: 1, target_time: 0.6, speed: 320, colour: "blue" },
	{ direction: "-1", turntype: 1, target_time: 0.8, speed: 320, colour: "blue" },
	{ direction: "-1", turntype: 1, target_time: 1.0, speed: 320, colour: "blue" },
	{ direction: "-1", turntype: 1, target_time: 1.2, speed: 320, colour: "blue" },
	{ direction: "-1", turntype: 1, target_time: 1.4, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 1.6, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 1.8, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 2.0, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 2.2, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 2.4, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 2.6, speed: 320, colour: "blue" },
	{ direction: "+1", turntype: 4, target_time: 2.8, speed: 320, colour: "blue" },
];
ag3.next_sets = ["ag1"];

arrow_groups = {
	ag1: ag1,
	ag2: ag2,
	ag3: ag3,
}

function format_time_long(ms) {

	var opt_days = "", opt_hours = "";

	if (ms > 86400000) {
		opt_days = Math.floor(ms / 86400000) + "/";
	} if (ms > 3600000) {
		opt_hours = _.padStart("" + Math.floor((ms % 86400000) / 3600000), 2, "0") + ":";
	}

	var minutes = _.padStart("" + Math.floor((ms % 3600000) / 60000), 2, "0") + "'";
	var seconds = _.padStart("" + Math.floor((ms % 60000) / 1000), 2, "0") + '"';
	var cs = _.padStart("" + Math.floor((ms % 1000) / 10), 2, "0");

	return opt_days + opt_hours + minutes + seconds + cs;

}


function dot_product(a, b) {
	return a.x * b.x + a.y * b.y;
}

function norm(dx, dy) {
	return Math.sqrt(dx * dx + dy * dy);
}

function scalar_mult(v, m){
	return { x: v.x * m, y: v.y * m };
}

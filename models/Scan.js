var mongoose = require('mongoose');

var scanSchema = mongoose.Schema ({
	name: String,
	email: String,
	googleId: String,
	image: String,
	time: String,
	formattedTime: String,
	scannedLocation: String,
	correct: Boolean,
	event: [{
		eventId: String,
		location: String,
		creator: String,
		start: String,
		end: String,
		activity: String,
		summary: String,
		focus_area: String
	}]
});

module.exports = mongoose.model('scan', scanSchema);

var https = require('https');
var User = require('../models/user');
var _ = require('lodash');
var moment = require('moment');
var bodyParser = require('body-parser');

function getNotId(data) {
	data = _.pick( data, function(val, key) {
		return key != 'id';
	});

	data = _.mapValues( data, function(val, key) {
		if (val === 'true') return true;
		if (val === 'false') return false;
		return val;
	});

	return data;
}

var googleController = {
	
	saveUser: function(req, res){
		var data = req.body

		User.findOne({ googleId: data.id}, function(err, user) {
			if (!user) {
				User.create({
					email: data.email,
					googleId: data.id,
					name: data.name,
					image: data.image,
					calendar: data.calendar
				}, function(err, user) {
					if (err) {
						console.error(err);
						res.send(err);
					}
					else { 
						res.send(user);
					}
				});
			} else {
				user.update({$set: getNotId(data) }, function(err, result) {
					if (err) {
						console.error(err);
						res.send(err);
					}
					else {
						// Send back the entire use object, extended with the new data, because the update results just give us number of documents affected
						res.send( _.extend(user, data) );
					}
				});
			}	
		});
	}
};

module.exports = googleController; 
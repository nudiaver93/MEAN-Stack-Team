var mongoose = require('mongoose');
// var dbUrl = 'mongodb://navin:angular123@ds151917.mlab.com:51917/heroku_2084dz3q';
var Schema = mongoose.Schema;


var EmployeeSchema = new Schema({
	name: {
		first: {
			type: String,
			required: true
		},
		last: {
			type: String,
			required: true
		}
	}, 
	team: {
		type: Schema.Types.ObjectId,
		ref: 'Team'
	},
	image: {
		type: String,
		default: 'images/user.png'
	},
	address: {
		lines: {
			type: [String]
		},
		city: {
			type: String
		},
		state: {
			type: String
		}
		zip: {
			type: Number
		}
	}
});

module.exports = mongoose.model('Employee', EmployeeSchema);
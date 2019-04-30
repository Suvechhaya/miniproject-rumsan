var mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
	username: String,
	email: String,
	phone: String,
	password: String,
	createdDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Users',UserSchema)
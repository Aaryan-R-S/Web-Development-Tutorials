const mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
// var crypto = require('crypto');

const userSchema = new mongoose.Schema({
    //   username: String,
    username: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    password: String
}, { timestamps: true });

// userSchema.plugin(uniqueValidator, { message: 'is already taken.' });

// userSchema.methods.setPassword = function (password) {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };

// userSchema.methods.validPassword = function(password) {
//     var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     return this.hash === hash;
// };
userSchema.methods.authenticate = function(password) {      
    return this.password === password;
}
const User = mongoose.model('signInGFG', userSchema);
module.exports = User



// var mongoose = require('mongoose');

// var UserSchema = new mongoose.Schema({
// //   username: String,
// //   email: String,
//   email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
//   bio: String,
//   image: String,
//   hash: String,
//   salt: String
// }, {timestamps: true});

// mongoose.model('User', UserSchema);




// var mongoose = require('mongoose');
// +var uniqueValidator = require('mongoose-unique-validator');
// +var crypto = require('crypto');

// var UserSchema = new mongoose.Schema({
// - username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
// + username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
// - email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
// + email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
//   bio: String,
//   image: String,
//   hash: String,
//   salt: String
// }, {timestamps: true});

// + UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// +UserSchema.methods.setPassword = function(password){
//     +  this.salt = crypto.randomBytes(16).toString('hex');
//     +  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     +};

// +UserSchema.methods.validPassword = function(password) {
//     + var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     + return this.hash === hash;
//     +};

// mongoose.model('User', UserSchema);
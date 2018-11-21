var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var userSchema = new Schema({
   name: String,
   dob:Date
 })

var User = mongoose.model('users', userSchema);

module.exports = User;

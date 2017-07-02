'use strict'

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const userSchema = new Schema({
  first_name : String,
  last_name  : String,
  email      : {
             type   : String,
             unique : true
  },
  password   : String,
  age        : String,
  address    : String,
  phoneNumber: String,
  gender     : String,
  preffered  : String,
  alerts     : Array
});


module.exports = mongoose.model('User', userSchema)

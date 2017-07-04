'use strict'

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const userSchema = new Schema({
  type       : String,
  first_name : String,
  last_name  : String,
  email      : {
             type   : String,
             unique : true
  },
  password   : String,
  birthday   : String,
  address    : {
             line_one : String,
             line_two : String,
             city     : String,
             state    : String,
             zip      : String,
  },
  phoneNumber: String,
  gender     : String,
  preffered  : String,
  alerts     : Array
});


module.exports = mongoose.model('User', userSchema)

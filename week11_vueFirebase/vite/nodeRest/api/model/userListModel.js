'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema //like class in program

var UserSchema = new Schema({
    firstName :{
        type : String,
        Required : 'Please Enter'
    },
    lastName :{
        type : String,
        Required : 'Please Enter'
    },
    email :{
        type : String,
        Required : 'Please Enter'
    },
    createdDate:{
        type : String,
        Required : Date.now
    }
})

module.exports = mongoose.model('Users',UserSchema)
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema 
var ContactSchema = new Schema({
    firstname :{
        type : String,
        Required : 'Please Enter'
    },
    lastname :{
        type : String,
        Required : 'Please Enter'
    },
    username :{
        type : String,
        Required : 'Please Enter'
    },
    password :{
        type : String,
        Required : 'Please Enter'
    },
    email :{
        type : String,
        Required : 'Please Enter'
    },
    mobile :{
        type : String,
        Required : 'Please Enter'
    },
    image :{
        type : String,
        Required : 'Please Enter'
    }
})

module.exports = mongoose.model('Contacts',ContactSchema)


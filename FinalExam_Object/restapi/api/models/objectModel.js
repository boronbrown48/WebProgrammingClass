'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ObjectSchema = new Schema({
    objtype: {
        type: String,
        Required: 'Please enter'
    },
    width: {
        type: Number,
        Required: 'Please enter'
    },
    height: {
        type: Number,
        Required: 'Please enter'
    },
    depth: {
        type: Number,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('QObjects', ObjectSchema)
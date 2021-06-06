'use strict'

var mongoose = require('mongoose')
var User = mongoose.model('Users')

exports.ListAllUsers = function(req,res){
    var query = {sort : {firstName: 1}}
    User.find({},null,query,function(err,user){
        if(err) throw  err
        console.log(user)
        res.json(user)
    })
}

exports.readAUser = function(req,res){
    User.findById(req.params.userID,function(err,user){
        if(err) throw  err
        console.log(user)
        res.json(user)
    })
}

exports.createAUser = function(req,res){
    var newUser = new User(req.body) //inputttttttttttt
    newUser.save(function(err,user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}

exports.updateAUser = function(req, res){
    console.log(req.params.userId)
    var newUser = {}
    newUser = req.body
    console.log(newUser)
    User.findByIdAndUpdate(req.params.userId, newUser, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}

exports.deleteAUser = function(req, res){
    User.findByIdAndRemove(req.params.userId, function(err, user){
        if(err) throw err
        const response = {
            message: "Delete user successfully",
        }
        res.json(response)
    })
}
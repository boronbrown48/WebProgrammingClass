'use strict'
var mongoose = require('mongoose')
QObject = mongoose.model('QObjects')

exports.listAllObjects = function(req, res){
    var query = {}
    QObject.find({},null,query,function(err,obj){
        if(err) throw  err
        console.log(obj)
        res.json(obj)
    })
}

exports.readAObject = function(req, res){
    QObject.findById(req.params.objID,function(err,obj){
        if(err) throw  err
        console.log(obj)
        res.json(obj)
    })
}

exports.calAObject = function(req, res){
    if(req.params.type=="rectangle"){
        let obj = {
            "objtype": "rectangle",
            "width": req.params.width,
            "height": req.params.height,
            "depth":req.params.depth,
            "area": parseInt(req.params.height)*parseInt(req.params.width),
            "volume": parseInt(req.params.height)*parseInt(req.params.width)*parseInt(req.params.depth)
        }
        res.json(obj)
    }
    else if(req.params.type=="triangle"){
        let obj = {
            "objtype": "triangle",
            "width": req.params.width,
            "height": req.params.height,
            "depth":req.params.depth,
            "area": parseInt(req.params.height)*parseInt(req.params.width)*0.5,
            "volume": parseInt(req.params.height)*parseInt(req.params.width)*parseInt(req.params.depth)*0.5
        }
        res.json(obj)
    }
    
}

//app.route('/calculate/:type/:height/:width/:depth')
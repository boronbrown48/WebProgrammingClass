
var http=require('http')
var fs=require('fs')
var express=require('express')
var crypto = require('crypto')
var routing=express()
var fs=require('fs')
var users = fs.readFileSync('./users.json','utf8')
var data = JSON.parse(users);

routing.get('/profile/:id',function(req,res){
        
        res.send("<h1>id : "+data.users[req.params.id].id+"</br>username : "+data.users[req.params.id].username+"</br>password : "+crypto.createHash('sha1').update(data.users[req.params.id].password).digest('hex')+"</br>full name : "+data.users[req.params.id].fullname+" </h1>")       
})
routing.listen(8081)


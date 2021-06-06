var MongoClient = require('mongodb').MongoClient
var express = require('express')
var app=express()
var url = "mongodb://localhost:27017/"

var users ={}
MongoClient.connect(url, function(err, db){
    if(err) throw err
    var dbo = db.db("MyProducts")
    dbo.collection("Users").findOne({},function(err,result){
        if(err) throw err
        users=result 
        //console.log(users)
    })
    db.close()
})

// app.get('/getusers',function(req,res){
//     res.end(JSON.stringify(users["user"+req.params.id]))
//     console.log(users)//console dont have to convert
// })

app.get('/getuser/:id', function(req,res){ 
    res.send("<h1>name : " + users["user"+req.params.id].name+"</br>password : "+ users["user"+req.params.id].password + "</br>occupation : "+ users["user"+req.params.id].occupation + "</br>occupation : "+ users["user"+req.params.id].id +"</h1>")    
})

app.get('/getusername/:name', function(req,res){
    var found =false;
for(i = 1;i<=3;i++){
    if (users["user"+i].name == req.params.name){
        res.end(JSON.stringify(users["user"+i]))
        found = true;
    } 
}
    if(found==false) res.end("User Not Found")
})

var server =app.listen(8081,function(){
    var host = server.address().address
    var port = server.address.port
    console.log("Application run at http://%s:%s",host,port)
})
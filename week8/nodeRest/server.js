var express = require('express')
var app = express()
var fs = require('fs') //Read user.json

app.get('/getUsers', function(req,res){ //routing
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){ //read and keep in var data
        console.log(data) // user.json data
        res.end(data)
    })
})

app.get('/getUsers/:id', function(req,res){ //routing
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){ //read and keep in var data
        var users = JSON.parse(data)
        var user = users["user"+req.params.id]
        console.log(user) // user.json data
        res.end(JSON.stringify(user))//must convert to string again to show on browser
    })
})

app.post('/addUsers', function(req,res){ //routing insert
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){ //read and keep in var data
        var users = JSON.parse(data)
        var user = {
            "name":"boron","password":"4848","occupation":"developer","id":4
        }
        users["user4"] = user
        console.log(users) // user.json data
        res.end(JSON.stringify(users))//must convert to string again to show on browser
    })
})
app.delete('/deleteUsers/:id', function(req,res){ //routing insert
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){ //read and keep in var data
        var users = JSON.parse(data)
        delete users["user"+req.params.id]
        console.log(users) // user.json data
        res.end(JSON.stringify(users))//must convert to string again to show on browser
    })
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})

//npm install -g json-server tool to deal json file like in DB
//mongod --dbpath data > run mongo must be in bin folder of mongo
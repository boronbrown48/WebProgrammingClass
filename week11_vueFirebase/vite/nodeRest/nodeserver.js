const bodyParser = require('body-parser')
var express = require('express')
var app = express()

var port = process.env.PORT || 5000 
var mongoose = require('mongoose')

var User = require('./api/model/userListModel')

mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/UserDB', function(error){
    if(error) throw error
    console.log("Successfully connected")

})
const cors = require('cors')
app.use(cors()) //for run back and front end server in the same com 

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var routes = require('./api/route/userListRoutes')
routes(app)
app.listen(port)
console.log('User List Server started on : '+port)